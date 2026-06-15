// app/api/user.ts

import axios from "axios";

export async function createUser(
  user: any) 
  {
  const response = await axios.post(
    "http://localhost:3001/users",
    user
  );

  return response.data;
}