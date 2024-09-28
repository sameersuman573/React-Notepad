import React from "react";
import { Formik, Form, validateYupSchema } from "formik";
import {textField} from "./TextField";
import * as Yup from "yup";
import { confirmPasswordReset } from "firebase/auth";
import { TextField } from "@mui/material";



const Signup = () => {



  // Form validation using Yup

  const validate = Yup.object(
    {
    firstname: Yup.string().max(15, "Must be 15 char").required("Required"),
    lastname: Yup.string().max(20, " Must be 20 char").required("Required"),
    email: Yup.string().email("email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "password must bt atleast 6 char")
      .required(" Password is must"),
    Confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required(" Password is must"),

  });

  return (

    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}

      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}

    >
    
    
      {(formik) => (
        
        <div>
          <h1>Signup</h1>

          <Form>
            <TextField label="first name" name="firstname" type="text" />
            <TextField label="last name" name="lastname" type="text" />
            <TextField label="email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField
              label="confirm password"
              name="confirmpassword"
              type="password"
            />


            <button type="submit" />
            <button type="submit" />
          </Form>
        </div>

      )}
    </Formik>
  );
};

export default Signup;
