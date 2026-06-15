import { cookies } from "next/headers";
import { SessionUser } from "../_types/SessionUser ";
;



//set session
export const  setSession = async(user: SessionUser) => {
    (await cookies()).set("session", JSON.stringify(user), {
        httpOnly: true,
        secure: process.env.NODE_ENV ==="production",
        maxAge: 60* 60* 24* 7,
        path: '/'
    });
}



// get session


export const  getSession = async(): Promise<SessionUser | null> => {
    const session = (await cookies()).get("session")?.value;
    if (!session) return null;
    const user = JSON.parse(session) as SessionUser;
    return user;
}

// delete session
export const deleteSession = async() => {
    const cookiesStore = await cookies();
    cookiesStore.delete("session");
}