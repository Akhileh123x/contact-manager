"use client";


import { useRouter } from "next/navigation";
import { logoutAction } from "../actions/auth";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logoutAction();
      // router.push("/login");
      router.refresh();

    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  return (
    <div className="hover:text-blue-600">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;