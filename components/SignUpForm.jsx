import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
function SignUpForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().lowercase().required("Email is required").email("Email is invalid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const [isFormSubmitted,setIsFormSubmitted]=useState(false)
  const [submissionResult,setSubmissionResult]=useState('')

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  async function onSubmit(data) {
    const response = await fetch('/api/form', {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    // alert(`Is this your full name: ${result.data}`)
    // display form data on success
    // alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    setIsFormSubmitted(true);
    setSubmissionResult(result);
   
    // setSubmissionResult(result)
    // console.log('result => ',result)
    
  }

  return(
    <>{isFormSubmitted===false?
      <form className="min-w-fit min-h-full text-2xl grid grid-rows-5b gap-4 p-8" onSubmit={handleSubmit(onSubmit)}>
        <input
          id="name"
          name="name"
          type="text"
          {...register("name")}
          placeholder="Enter Your Name"
          required
          className={`lg:min-w-full lg:min-h-full lg:w-full lg:h-full sm:w-1/2 sm:h-full sm:place-content-center sm:mx-auto rounded-l-full rounded-r-full content-center text-center  form-control ${errors.name ? "is-invalid" : ""} w-max `}
        />
        <div className="invalid-feedback">{errors.name?.message}</div>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          {...register("email")}
          className={`lg:min-w-full lg:min-h-full lg:w-full lg:h-full sm:w-1/2 sm:h-full sm:place-content-center sm:mx-auto rounded-l-full rounded-r-full content-center text-center  form-control ${errors.email ? "is-invalid" : ""} w-max`}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
        <button className="lg:min-w-full lg:min-h-full lg:w-full lg:h-full sm:w-1/2 sm:h-full sm:place-content-center sm:mx-auto rounded-l-full rounded-r-full content-center text-center bg-purple-700" type="submit"> Submit </button>
      </form>
      
  :<p>{submissionResult}</p>}
  </>)
  // return (<>
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <input
  //         id="name"
  //         name="name"
  //         type="text"
  //         {...register("name")}
  //         placeholder="Enter Your Name"
  //         required
  //         className={`form-control ${errors.name ? "is-invalid" : ""} w-max `}
  //       />
  //       <div className="invalid-feedback">{errors.name?.message}</div>

  //       <input
  //         id="email"
  //         name="email"
  //         type="email"
  //         placeholder="Enter Your Email"
  //         {...register("email")}
  //         className={`form-control ${errors.email ? "is-invalid" : ""} w-max`}
  //       />
  //       <div className="invalid-feedback">{errors.email?.message}</div>
  //       <button type="submit"> Submit </button>
  //     </form>
  //     <p className="text-green-500">{submissionResult}</p>
  //     </>)
};
export default SignUpForm;
