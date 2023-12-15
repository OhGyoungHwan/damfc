import { prisma } from "@/app/utils/prisma";
import { NextResponse, NextRequest } from "next/server";

export interface IPlayer {
  id: number;
  imgSrc: string;
  name: string;
  season: string;
}

export interface IPlayerOnPlayerRES {
  likePlayer: IPlayer[];
  selfPlayer: IPlayer;
}

const prismaPlayerOnPlayer = (spid: number) =>
  prisma.playerOnplayer.findMany({
    where: {
      selfPlayerId: spid,
    },
    orderBy: {
      rank: "asc",
    },
    select: {
      likePlayer: {
        select: {
          season: true,
          name: true,
          id: true,
          imgSrc: true,
        },
      },
    },
  });
const prismaSelfPlayer = (spid: number) =>
  prisma.player.findFirst({
    where: {
      id: spid,
    },
    select: {
      season: true,
      name: true,
      id: true,
      imgSrc: true,
    },
  });

export async function GET(request: NextRequest) {
  const spid = request.nextUrl.searchParams.get("spid");
  const res = {} as IPlayerOnPlayerRES;
  if (spid) {
    const selfPlayer = await prismaSelfPlayer(parseInt(spid));
    const likePlayer = await prismaPlayerOnPlayer(parseInt(spid));
    res.selfPlayer = selfPlayer || ({} as IPlayer);
    res.likePlayer =
      likePlayer.map((obj) => obj.likePlayer) || ({} as IPlayer[]);
  }

  return NextResponse.json(res);
}
