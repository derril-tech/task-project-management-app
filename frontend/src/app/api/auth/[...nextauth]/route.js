import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await getUser(credentials.email);
        if (
          !user ||
          !(await verifyPassword(credentials.password, user.password))
        ) {
          throw new Error("Invalid credentials!");
        }
        return { email: user.email };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
