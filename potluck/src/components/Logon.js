import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";

function Login({ touched, errors }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <Form >
      <div >
        <label >Email</label>
        <Field 
        name="email" 
        type="email" 
        autoComplete="off"
        />
        <p>{touched.email && errors.email}</p>
      </div>

      <div >
        <label >Password</label>
        <Field
          name="password"
          type="password"
          autoComplete="off"
        />
        <p>{touched.password && errors.password}</p>
      </div>

      <button>Submit &rarr;</button>
    </Form>
  );
}

export default withFormik({

  mapPropsToValues() {
    return {
      email: "",
      password: ""
    };
  },


  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),


  handleSubmit(values, formikBag) {
    const url = "http://localhost:3000/";
    axios
      .post(url, values)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        formikBag.props.history.push("/");
      })
      .catch(e => {
        console.log(e.response.data);
      });
  }

})(Login);