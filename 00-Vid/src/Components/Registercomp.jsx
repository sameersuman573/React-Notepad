import * as React from "react";
import "../App.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { toast } from "react-toastify";

import { GoogleSignAPI, RegisterAPI } from "../API/AuthAPI";
import { useState } from "react";

// import * as React from 'react';
import Stack from "@mui/material/Stack";
// import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

// FORM VALIDATION
import { useFormik } from "formik";
import { signupSchema } from "../Schemas_Register";
// Write the initial values

// firestore
import { getUniqueid } from "./Helpers/getUniqueid";
import { postUserData } from "../API/FirestoreAPI";
import { getCurrentUser } from "../API/FirestoreAPI";

// redux
import { useDispatch } from "react-redux";
import { login } from "../Store/Authslice";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  Cpassword: "",
};

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //       email: data.get("email"),
  //       password: data.get("password"),
  //     });
  //   };

  // FORM VALIDATION
  // Do destruturing so that you will not have to write formik.handlecahnge you can simply write handlechange
  // Formik has predefined functions to handle forms
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
        console.log(values);
        actions.resetForm();
      },
    });

  console.log(touched);

  const register = async () => {
    try {
      // console.log("email", values.email);
      // console.log("password", values.password);

      let res = await RegisterAPI(values.email, values.password);
      toast.success("Successfully Account Created!");
      // return res;
      console.log(res);

      // with this function my data will be saved to firestore
      postUserData({
        userID: getUniqueid(),
        email: values.email,
      });

      if (res) {
        const userdata = await getCurrentUser(values.email);
        console.log(userdata);

        if (userdata) {
          dispatch(login(userdata));
          navigate("/Workspace");
        }
      }

      // whenever this function will be called up the data will be stored in the firestore
      //   postUserData({
      //     userID: getUniqueID(),
      //     name: credentails.name,
      //     email: credentails.email,
      //     imageLink:
      //       "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      //   });
      //   navigate("/home");
      //   localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
    }
  };

  const googleSignIn = async () => {
    let res = await GoogleSignAPI();
    console.log(res);
    navigate("/Home")
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {/* FORM ------------------------------------------------------------*/}

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  type="text"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div>
                  {errors.firstName && touched.firstName && (
                    <p style={{ color: "red" }}>{errors.firstName}</p>
                  )}
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  type="text"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={values.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div>
                  {errors.lastName && touched.lastName && (
                    <p>{errors.lastName}</p>
                  )}
                </div>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div>
                  {errors.email && touched.email && <p>{errors.email}</p>}
                </div>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  typeof="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div>
                  {errors.password && touched.password && (
                    <p>{errors.password}</p>
                  )}
                </div>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Cpassword"
                  typeof="password"
                  label="Confirm-Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={values.Cpassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div>
                  {errors.Cpassword && touched.Cpassword && (
                    <p>{errors.Cpassword}</p>
                  )}
                </div>
              </Grid>

              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>

            <Button
              onClick={register}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Stack direction="row" spacing={2}>
              <Button
                onClick={googleSignIn}
                type="submit"
                variant="outlined"
                color="error"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                Google
              </Button>
            </Stack>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
