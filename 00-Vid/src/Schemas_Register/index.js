import * as Yup from "yup";

// const passwordRegex =
//   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const signupSchema = Yup.object({
  firstName: Yup.string().min(3).required("please enter your firstname."),
  lastName: Yup.string().min(3).required("please enter your lastname."),
  email: Yup.string()
    .email("please enter your email")
    .required("please enter valid password."),
  password: Yup.string()
    // .matches("please enter valid password")
    .required("please enter password"),
  Cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "password fo not Match")
    .required("please enter confirm password"),

});
