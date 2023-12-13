"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  const { data: session } = useSession();
  console.log(session?.user);

  if (session && session.user) {
    return (
      <button
        className="px-12 py-4 border rounded-xl bg-red-300"
        onClick={() => signOut()}
      >
        {session.user.name}님 Log Out
      </button>
    );
  }

  return (
    <button onClick={() => signIn()}>
      <Image
        src={`/kakao_login_small.png`}
        alt="카카오 로그인"
        width={60}
        height={30}
      />
    </button>
  );
};

export default Login;
