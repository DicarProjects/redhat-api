import fs from 'fs';
import path from 'path';
import { FormData } from '../../interfaces/FormData';

/**
 * Process email template and replace placeholders with form data.
 * @param {FormData} formData - Form data object.
 * @returns {string} - Processed HTML content.
 */
export function processEmailTemplate(formData: FormData): string {
  try {
    const templatePath = path.join(__dirname, '..', 'html', 'emailTemplate.html');
    console.log("esta es la ruta:",templatePath);
    const htmlContent = fs.readFileSync(templatePath, 'utf8');

    const replacedHtml = htmlContent.replace(/\[(.+?)\]/g, (match, p1) => {
      return formData[p1] !== undefined ? formData[p1] : match;
    });

    return replacedHtml;
  } catch (error) {
    console.error("Error processing email template:", error);
    throw new Error("Error processing email template");
  }
}
