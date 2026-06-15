import Link from "next/link";
import { registerAction } from "../actions/auth";

const RegisterPage = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Register
      </h1>

      <form action={registerAction} className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium"
          >
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
            className="mt-1 w-full border rounded-md px-3 py-2"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            className="mt-1 w-full border rounded-md px-3 py-2"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium"
          >
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
            className="mt-1 w-full border rounded-md px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;