import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/reducers/auth";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const btnstyle = { margin: "8px 0" };
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.user.register.successful);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone_number: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      phone_number: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(10)
        .required("A phone number is required"),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Confirm password is required"),
    }),
    onSubmit: ({ email, password, phone_number }, props) => {
     
      dispatch(register({ email, password, phone_number }));
      setTimeout(() => {
        props.resetForm();
        props.setSubmitting(false);
      }, 2000);
    },
  });
  React.useEffect(() => {
    if(userRegister){
      navigate("/login")
    }
  }, [userRegister]);
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            autoFocus
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your email"
          />
          {formik.errors.email && (
            <Typography variant="secondary"> {formik.errors.email} </Typography>
          )}
          <TextField
            fullWidth
            label="Phone Number"
            name="phone_number"
            value={formik.values.phone_number}
            placeholder="Enter your phone number"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.phone_number && (
            <Typography variant="secondary">
              {" "}
              {formik.errors.phone_number}{" "}
            </Typography>
          )}
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
          />
          {formik.errors.password && (
            <Typography variant="primary">{formik.errors.password}</Typography>
          )}
          <TextField
            fullWidth
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            label="Confirm Password"
            placeholder="Confirm your password"
          />
          {formik.errors.confirmPassword && (
            <Typography variant="primary">
              {formik.errors.confirmPassword}
            </Typography>
          )}
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button
            type="submit"
            disabled={formik.isSubmitting}
            style={btnstyle}
            fullWidth
            variant="contained"
            color="primary"
          >
            {formik.isSubmitting ? "Loading" : "Register"}
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
