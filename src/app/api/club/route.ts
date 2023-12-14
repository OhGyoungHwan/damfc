import { prisma } from "@/app/utils/prisma";
import { NextResponse, NextRequest } from "next/server";

export interface IClub {
  club: string;
  players: {
    id: number;
    name: string;
    imgSrc: string;
    ovr: number;
    pay: number;
    season: string;
    postion: number;
    grade: number;
  }[];
}

export interface IClubRES {
  keyboard: IClub[];
  gamepad: IClub[];
}

const prismaClubOnplayerkeyboard = prisma.clubOnplayer.findMany({
  where: {
    club: {
      controller: "keyboard",
    },
  },
  orderBy: {
    club: {
      rank: "asc",
    },
  },
  take: 110,
  select: {
    grade: true,
    position: true,
    club: {
      select: {
        controller: true,
        rank: true,
        name: true,
      },
    },
    player: {
      select: {
        id: true,
        imgSrc: true,
        ovr: true,
        season: true,
        pay: true,
        name: true,
      },
    },
  },
});

const prismaClubOnplayergamepad = prisma.clubOnplayer.findMany({
  where: {
    club: {
      controller: "gamepad",
    },
  },
  orderBy: {
    club: {
      rank: "asc",
    },
  },
  take: 110,
  select: {
    grade: true,
    position: true,
    club: {
      select: {
        controller: true,
        rank: true,
        name: true,
      },
    },
    player: {
      select: {
        id: true,
        imgSrc: true,
        ovr: true,
        season: true,
        pay: true,
        name: true,
      },
    },
  },
});

export async function GET() {
  const keyboardRes = await prismaClubOnplayerkeyboard;
  const gamepadRes = await prismaClubOnplayergamepad;
  const clubs = { keyboard: [], gamepad: [] } as IClubRES;

  [...Array(10)].map((_, idx1) => {
    const clubIdx = idx1 * 11;
    const keyboardClubName = keyboardRes[clubIdx].club.name;
    const keyboardPlayers = [...Array(11)].map((_, idx2) => {
      return {
        ...keyboardRes[clubIdx + idx2].player,
        postion: keyboardRes[clubIdx + idx2].position,
        grade: keyboardRes[clubIdx + idx2].grade,
      };
    });
    const gamepadClubName = gamepadRes[clubIdx].club.name;
    const gamepadPlayers = [...Array(11)].map((_, idx2) => {
      return {
        ...gamepadRes[clubIdx + idx2].player,
        postion: gamepadRes[clubIdx + idx2].position,
        grade: gamepadRes[clubIdx + idx2].grade,
      };
    });
    clubs.gamepad.push({
      club: gamepadClubName,
      players: gamepadPlayers,
    });
    clubs.keyboard.push({
      club: keyboardClubName,
      players: keyboardPlayers,
    });
  });

  return NextResponse.json(clubs);
}
