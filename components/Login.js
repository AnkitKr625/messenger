"use client";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("submit", data);
    // Submit data for login
  }
  return (
    <>
      <form
        className="flex flex-col gap-4 mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control flex justify-end gap-2">
          <label htmlFor="userName">User Name :</label>
          <div>
            <input
              className="p-1 border-2 border-solid rounded-lg"
              type="text"
              id="userName"
              {...register("userName", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
            />
            <p className="text-red-500 text-sm">{errors?.userName?.message}</p>
          </div>
        </div>
        <div className="form-control flex justify-end gap-2">
          <label htmlFor="email">Email :</label>
          <div>
            <input
              className="p-1 border-2 border-solid rounded-lg"
              type="email"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/,
                  message: "Invalid email format",
                },
              })}
            />
            <p className="text-red-500 text-sm">{errors?.email?.message}</p>
          </div>
        </div>
        <div className="form-control flex justify-end gap-2">
          <label htmlFor="password">Password :</label>
          <div>
            <input
              className="p-1 border-2 border-solid rounded-lg"
              type="password"
              id="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            <p className="text-red-500 text-sm">{errors?.password?.message}</p>
          </div>
        </div>
        <button
          className="p-1 bg-blue-500 text-white rounded-lg font-semibold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
