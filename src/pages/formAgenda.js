import React from "react"

import useForm from "react-hook-form"

export default () => {
  const { register, errors, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <>
      <h1>Form Agenda </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="firstName"
          ref={register({ required: true, maxlength: 20 })}
        />
        {errors.firstName && "First name is required"}
        <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />

        {errors.lastName && "Last name is required"}
        <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
        {errors.age && "Age 18 is required"}

        <select name="gender" ref={register}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <input type="submit" />
      </form>
    </>
  )
}
