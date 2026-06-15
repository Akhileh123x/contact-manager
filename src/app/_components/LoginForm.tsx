"use client";

import { loginAction } from "../actions/auth";

const LoginForm = () => {
  return (
    <form action={loginAction} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Password
        </label>

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="w-full border rounded-md p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;