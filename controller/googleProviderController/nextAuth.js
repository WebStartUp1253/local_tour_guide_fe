import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const authOption = {
    providers : [
        GoogleProvider({
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret
            })
    ]
}

export default NextAuth(authOption)