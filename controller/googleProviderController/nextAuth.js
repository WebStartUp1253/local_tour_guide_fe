import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const authOption = {
    providers : [
        GoogleProvider({
            clientId: '623781784297-cl2jt1gresjnij55bblrfpsn4rkkuech.apps.googleusercontent.com',
            clientSecret: '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'
            })
    ]
}

export default NextAuth(authOption)