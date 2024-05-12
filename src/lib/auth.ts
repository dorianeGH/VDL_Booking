import {
  AuthOptions,
  NextAuthOptions,
  User,
} from "@/node_modules/next-auth/index";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../prisma";

export const authconfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      //name: "se connecter",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith.at.gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      //verify si le user est autorisé
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;
        const dbUser = await prisma.user.findFirst({
          where: { email: credentials.email },
        });

        if (dbUser && dbUser.password === CredentialsProvider.password) {
          const { password, createdAt, id, ...dbUserWithoutPassword } = dbUser;
          return dbUserWithoutPassword as User;
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
};

/**
 * 
 * export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};
 */
