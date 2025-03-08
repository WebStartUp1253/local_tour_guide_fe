"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Signup() {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (session) {
      axios.post("http://localhost:5000/auth/google/callback", { token: session.accessToken })
        .then(res => setUser(res.data))
        .catch(err => console.error(err));
    }
  }, [session]);

  return (
    <div>
      <h1>Next.js Authentication</h1>
      {!session ? (
        <button onClick={() => signIn("google")}>Login with Google</button>
      ) : (
        <>
          <p>Welcome, {session.user.name}</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      )}
    </div>
  );
}
