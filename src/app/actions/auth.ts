"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/User";
import { deleteSession, setSession } from "../_lib/session";
import { createUser } from "../api/user";

const API_URL = "http://localhost:3001";

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email")).trim();
  const password = String(formData.get("password")).trim();

  const response = await axios.get(`${API_URL}/users`);

  const user = response.data.find(
    (user: UserType) =>
      user.email === email &&
      user.password === password
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  await setSession({
    id: user.id,
    name: user.name,
    email: user.email,
  });

  redirect("/contact");
}

export async function registerAction(formData:FormData) {
   const name = formData.get("name");
   const password = formData.get("password");
   const email = formData.get("email");

   const user = {
    name: String(name),
    email: String(email),
    password: String(password)
   };
   console.log(user);
   await createUser(user);
   redirect("/login");
}

export async function logoutAction() {
  // set user in the cookies
  await deleteSession();
  redirect("/login");
}