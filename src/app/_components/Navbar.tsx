import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { getSession } from "../_lib/session";

const Navbar =  async () => {
    const session = await getSession(); // Simulating a session check

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-600">
                    Contact Manager
                </Link>
                {
                    session ? (
                        <>

                            <Link href="/contact" className="hover:text-blue-600">
                                Contact</Link>
                            <LogoutButton />
                        </>
                    ) : (
                        <>
                            <Link href="/register" className="hover:text-blue-600">
                                Register</Link>

                            <Link href="/login" className="hover:text-blue-600">
                                Login</Link>
                        </>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;