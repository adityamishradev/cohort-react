import React from 'react'
import { useForm } from "react-hook-form";

const App = () => {

  const {
    register,handleSubmit,formState: { errors } } = useForm();

  // ✅ submit function
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* First Name */}
        <input
          {...register("firstName", {   required: "First name is required",
            required: "First name is required",
            maxLength: {
              value: 20,
              message: "Max length is 20"
            }
          })}
          placeholder="First Name"
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        {/* Last Name */}
        <input
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Only letters allowed"
            }
          })}
          placeholder="Last Name"
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        {/* Age */}
        <input
          type="number"
          {...register("age", {
            min: {
              value: 18,
              message: "Minimum age is 18"
            },
            max: {
              value: 99,
              message: "Maximum age is 99"
            }
          })}
          placeholder="Age"
        />
        {errors.age && <p>{errors.age.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
