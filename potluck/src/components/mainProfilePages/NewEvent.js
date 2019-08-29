import React, { useState } from "react";

// import React from "react";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { Label, Input, SignUpWrapper } from '../styledComponents/StyledComponents'


const NewEvent = props => {

  // console.log(props)


  const defaultState = {
    name: ""
  };


  const [form, setForm] = useState(defaultState);


  function handleSubmit() {}

  return (
    <div className="form">

      <h1 className="heading titleH">Create New Event</h1>

      <form onSubmit={event => handleSubmit(event)}>
        <label className="toplabel" >
          Event Name
          <input
            className="nameF"
            type="text"
            name="name"
            placeholder="Event Name"
          />
        </label>
        <label>
          Event Address
          <input
            className="addressF"
            type="text"
            name="address"
            placeholder="Event Address"
          />
        </label>
        <label>
          Event Date  
          <input className="dateF" type="text" name="date" placeholder="Date" />
        </label>
        <label>
          Start Time
          <input
            className="startF"
            type="text"
            name="timestart"
            placeholder="Start Time"
          />
        </label>
        <label>
          End Time
          <input
            className="endF"
            type="text"
            name="timeend"
            placeholder="End Time"
          />
        </label>
        <label>
          Description
          <input
            className="descriptionF"
            type="text"
            name="description"
            placeholder="Description"
          />
        </label>

        <button className="buttonF">Submit</button>
      </form>
    </div>
  );
};
export default NewEvent;













// const NewEvent = ({ touched, errors }) => {

//   return (

//     <SignUpWrapper className="wrapper">

//       <h1 className ="signup heading">Sign up</h1>

//       <Form className="singUpForm">
//         <div>
          
//           <Input>
//             <Label>Username</Label>
//             <Field 
//               name="username" 
//               type="username"
//               autoComplete="off"
//             />
//             <br/>
//             <p>{touched.username && errors.username}</p>
//           </Input>


//           <Input>
//             <Label>Full Name</Label>
//             <Field 
//               name="full_name" 
//               type="text"
//               autoComplete="off"
//             />
//             <br/>
//             <p>{touched.full_name && errors.full_name}</p>
//           </Input>


//           <Input >
//             <Label>Email</Label>
//             <Field 
//               name="email" 
//               type="email" 
//               autoComplete="off"
//             />
//             <br/>
//             <p>{touched.email && errors.email}</p>
//           </Input>


//           <Input>
//             <Label>Password</Label>
//             <Field
//               name="password"
//               type="password"
//               autoComplete="off"
//             />
//             <br/>
//             <p>{touched.password && errors.password}</p>
//           </Input>


//           <button type="submit" >Submit &rarr;</button>
//         </div>
//       </Form>

//     </SignUpWrapper>
//   );
// }

// export default withFormik({

//   mapPropsToValues() {
//     return {
//       username: "",
//       email: "",
//       password: ""
//     };
//   },


//   validationSchema: Yup.object().shape({
//     username: Yup.string()
//       .min(3)
//       .required(),
//     full_name: Yup.string()
//       .min(3)
//       .required(),
//     email: Yup.string()
//       .email()
//       .required(),
//     password: Yup.string()
//       .min(6)
//       .required()
//   }),


//   handleSubmit(values, formikBag) {
//     // const url = "https://career-longevity-predictor.herokuapp.com/api/auth/register";
//     const url = "https://potluckplanner-be.herokuapp.com/users/register"


//     console.log(values)
//     axios
//       .post(url, values)
//       .then(response => {
//         console.log(response)
//         // localStorage.setItem("token");
//         formikBag.props.history.push("/users/login");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }

// })(NewEvent);