import { Service } from 'strapi-utils';
import { FormData } from '../interfaces/FormData';

module.exports = (): Service => ({
  /**
   * @param {FormData} data
   * @returns {Promise<any>}
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
