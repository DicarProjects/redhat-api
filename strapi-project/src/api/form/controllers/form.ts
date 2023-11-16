import { Context } from 'koa';
import { factories } from '@strapi/strapi';
import { FormData } from '../interfaces/FormData';
import { isValidEmail } from '../validators/emailValidator'; // Import the email validation function.

export default factories.createCoreController('api::form.form', ({ strapi }) =>  ({
  /**
   * Endpoint to handle form submission.
   * @param {Context} ctx - Koa context object.
   */
  async runFormRecordProcess(ctx: Context) {
    try {
      const { name, email, subject, comment }: FormData = ctx.request.body;

      if (!isValidEmail(email)) {
        ctx.response.status = 400;
        ctx.send({ error: 'Invalid email address' });
        return;
      }

      // Create form record
      const createdForm  = await strapi.service("api::form.form").createForm({ name, email, subject, comment });

      // Send email
      let emailSent;
      if (createdForm) {
         emailSent = await strapi.service("api::form.email").sendEmail({ name, email, subject, comment });
      }

      ctx.response.status = 200;
      ctx.send({
        formId: createdForm?.id || null,
        isFormCreated: !!createdForm,
        isEmailSent: !!emailSent,
      });

    } catch (error) {
      console.error("Error when trying to create the form: ", error);
      ctx.send({ error: 'Error when trying to create the form' }, 500);
    }
  },
}));
