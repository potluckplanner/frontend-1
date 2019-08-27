import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";




function SignUp({ touched, errors }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/Menu" />;
  }

  return (

    <Form >
      <div >
        <label >Name</label>
        <Field 
        name="name" 
        type="name" 
        autoComplete="off"
        />
        <p>{touched.name && errors.name}</p>
      </div>

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

      <button type="submit" >Submit &rarr;</button>
    </Form>
  );
}

export default withFormik({

  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },


  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3)
      .required(),
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
        formikBag.props.history.push("/Menu");
      })
      .catch(e => {
        console.log(e.response.data);
      });
  }

})(SignUp);