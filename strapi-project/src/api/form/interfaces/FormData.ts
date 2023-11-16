import { SubjectType } from "../enums/subjectType";

/**
 * Interface representing the data structure for form submissions.
 */
export interface FormData {
  name: string;
  email: string;
  subject: SubjectType;
  comment: string;
}
