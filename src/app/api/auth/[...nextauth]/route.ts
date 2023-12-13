import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
import { prisma } from "@/app/utils/prisma";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        // 데이터베이스에 유저가 있는지 확인
        let db_user = await prisma.user.findUnique({
          where: { id: user.id! },
        });

        // 없으면 데이터베이스에 유저 추가
        if (!db_user) {
          db_user = await prisma.user.create({
            data: {
              id: user.id!,
              name: user.name!,
            },
          });
        }

        // 유저 정보에 데이터베이스 아이디, 역할 연결
        user.id = db_user.id;

        return true;
      } catch (error) {
        console.log("로그인 도중 에러가 발생했습니다. " + error);
        return false;
      }
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
