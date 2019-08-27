import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Label, Input, SignUpIntro, SignUpWrapper } from './styledComponents/StyledComponents'



function SignUp({ touched, errors }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/Menu" />;
  }

  return (

    <SignUpWrapper>

      <Form className="singUpForm">
        <div>
          <Input>
            <Label>Name</Label>
            <Field 
            name="name" 
            type="text" 
            autoComplete="off"
            />
            <br/>
            <p>{touched.name && errors.name}</p>
          </Input>

          <Input >
            <Label>Email</Label>
            <Field 
            name="email" 
            type="email" 
            autoComplete="off"
            />
            <br/>
            <p>{touched.email && errors.email}</p>
          </Input>

          <Input>
            <Label>Password</Label>
            <Field
              name="password"
              type="password"
              autoComplete="off"
            />
            <br/>
            <p>{touched.password && errors.password}</p>
          </Input>

          <button type="button" class="btn btn-primary">Primary</button>
        </div>
      </Form>

      <SignUpIntro>jhsdh jbrjh fhj rkfdj ggllll lkjlsg drrr rr 
        rrrrrrrrr rrrrrr rrrr rrr rrrrrrr rrrr rrrrr rrrrrrr rr
        rrrrrrrrr rrrr rrrrrrfhjr fhjbrammm mmmmmmmmm 
        mmmm mmm mmm mmmmmm mm mmmmmmm mmmmmmmm mmmmmm 
        mmmmm mmmmm mmmmm mmmm</SignUpIntro>

    </SignUpWrapper>
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

    console.log(formikBag)
    axios
      .post(url, values)
      .then(response => {
        console.log(response)
        localStorage.setItem("token", response.data.token);
        formikBag.props.history.push("/Menu");
      })
      .catch(e => {
        console.log(e.response.data);
      });
  }

})(SignUp);