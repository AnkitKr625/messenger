"use client"
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log('submit', data);
    // Submit data for login
  }
  return (<>
    <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control flex justify-end gap-2">
        <label htmlFor="userName">User Name :</label>
        <input className="p-1 border-2 border-solid rounded-lg" type="text" id="userName" {...register("userName")}/>
      </div>
      <div className="form-control flex justify-end gap-2">
        <label htmlFor="email">Email :</label>
        <input className="p-1 border-2 border-solid rounded-lg" type="email" id="email" {...register("email")}/>
      </div>
      <div className="form-control flex justify-end gap-2">
        <label htmlFor="password">Password :</label>
        <input className="p-1 border-2 border-solid rounded-lg" type="password" id="password" {...register("password")}/>
      </div>
      <button className="p-1 bg-blue-500 text-white rounded-lg font-semibold" type="submit">Submit</button>
    </form>
  </>);
}

export default Login;
