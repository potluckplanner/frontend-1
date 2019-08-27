import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Label, Input, SignUpIntro, SignUpWrapper } from '../styledComponents/StyledComponents'



function SignUp({ touched, errors }) {

  return (

    <SignUpWrapper>

      <Form className="singUpForm">
        <div>
          <Input>
            <Label>Name</Label>
            <Field 
              name="username" 
              type="username"
              autoComplete="off"
            />
            <br/>
            <p>{touched.username && errors.username}</p>
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

          <button type="submit" >Submit &rarr;</button>
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
      username: "",
      email: "",
      password: ""
    };
  },


  validationSchema: Yup.object().shape({
    username: Yup.string()
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
    const url = "https://career-longevity-predictor.herokuapp.com/api/auth/register";
    // const url = "https://pure-headland-63143.herokuapp.com/users/register"


    console.log(values)
    axios
      .post(url, values)
      .then(response => {
        console.log(response)
        // localStorage.setItem("token");
        formikBag.props.history.push("/users/login");
      })
      .catch(e => {
        console.log(e);
      });
  }

})(SignUp);