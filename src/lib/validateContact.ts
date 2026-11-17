export type ContactField = "name" | "email" | "question";
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_NAME_LENGTH = 2;
const MIN_QUESTION_LENGTH = 10;

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (values.name.trim().length < MIN_NAME_LENGTH) errors.name = "Please enter your full name.";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.question.trim().length < MIN_QUESTION_LENGTH) {
    errors.question = `Tell us a bit more (at least ${MIN_QUESTION_LENGTH} characters).`;
  }
  return errors;
}
