import * as Yup from "yup";

// const passwordRegex =
//   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("please enter the valid email")
    .required("please enter your email"),
  password: Yup.string()
    .min(3)
    // .matches(passwordRegex, "please enter a valid password")
    .required("please enter your password"),
});
