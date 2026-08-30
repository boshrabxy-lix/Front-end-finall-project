import * as yup from "yup";

export const ChangeEmailSchema = yup.object({
    currentEmail: yup.string().email("Current email must be a valid email").trim().required("Current email is required"),
    newEmail: yup.string().email("New email must be a valid email").trim().required("New email is required")
        .notOneOf([yup.ref("currentEmail")], "New email must be different from current email"),
});