import * as yup from "yup";

export const resetSchema = yup.object({
  code:yup.string().required("Code is required").matches(/^[0-9]{4}$/, "Code must contain a 4 Digit"),
  email:yup.string().email("email must be a valid email").required("email is required"),
  newPassword:yup.string().required("password is required").min(6,"password must be at least 6 characters"),
});