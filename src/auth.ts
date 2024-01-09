import NextAuth, { DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import { db } from "@/lib/db";
import { getUserById } from "./data/users";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      role: "ADMIN" | "USER";
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as "ADMIN" | "USER";
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) {
        return token;
      }
      const user = await getUserById(token?.sub as string);
      if (!user) return token;

      token.role = user.role;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },

  ...authConfig,
});
