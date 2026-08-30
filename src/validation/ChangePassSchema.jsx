import * as yup from "yup";


export const changePasswordSchema = yup.object({
  current: yup.string().required("Current password is required"),

  newPassword: yup
    .string().required("New password is required").min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/,
      "Password must contain an uppercase letter, a lowercase letter, a number, and a special character"
    )
    .notOneOf(
      [yup.ref("current")],
      "New password must be different from current password"
    ),
  confirm: yup.string().required("Please confirm your new password").oneOf([yup.ref("newPassword")], "Passwords do not match"),
});