import * as yup from "yup";

export const SendCodeSchema = yup.object({
    email: yup.string().email("email must be a valid email").required("email is required")
})