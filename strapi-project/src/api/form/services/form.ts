import { Service } from 'strapi-utils';
import { FormData } from '../interfaces/FormData';

module.exports = (): Service => ({
  /**
   * Creates a new record using the Strapi entity service.
   * @param {FormData} data - Data to create the record.
   * @returns {Promise<any>} - Promise that resolves with the result of the creation.
   */
  async createForm(data: FormData) {
    try {
      const result = await strapi.entityService.create("api::form.form", {
        data,
      });

      return result;
    } catch (error) {
      console.error('Error creating the record:', error);
      throw new Error('Failed to create the form record');
    }
  },
});
