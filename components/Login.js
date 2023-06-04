"use client"
import { useForm } from "react-hook-form";

function Login() {
  const { register } = useForm();
  return (<>
    <form className="flex flex-col gap-4 mt-4">
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
    </form>
  </>);
}

export default Login;
