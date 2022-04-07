import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => alert(JSON.stringify(data), console.log(data))
  return (
    <div className='form--whole'>
      <div className="form--container">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label>Email</label>
          <input
            {...register('email', { required: true })}
            placeholder="Email"
            className="email"
            type="email"
            name="email"
          />
          <div className="error">
            {errors.email?.type === 'required' && 'Email is required'}
          </div>
          <label>Mobile </label>
          <input
            {...register('number', {
              required: true,
              minLength: 10,
              maxLength: 10,
            })}
            placeholder="Mobile Number"
            className="mobile"
            type="number"
            name="number"
          />
          <div className="error">
            {errors.number?.type === 'required' && 'Number is required'}
          </div>
          <input type="submit" className="submit--btn" value='Login'/>
        </form>
      </div>
    </div>
  )
}

export default Form
