// import GitHub from "next-auth/providers/github";
import Credentials from "@auth/core/providers/credentials";
import {LoginSchema} from "@/schemas";
import type {NextAuthConfig} from "next-auth";
import {getUserByEmail} from "@/data/user";
import bcrypt from "bcryptjs";


export default {
    providers: [
        Credentials({
            // @ts-ignore
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials)
                if (validatedFields.success) {
                    const {email, password} = validatedFields.data;

                    const user = await getUserByEmail(email)
                    if (!user || !user.password) return null

                    const passwordMatch = await bcrypt.compare(password, user.password)

                    if (passwordMatch) {
                        return user
                    }
                    return null
                }
            }
        })
    ],
} satisfies NextAuthConfig;
