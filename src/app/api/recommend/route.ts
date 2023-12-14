import { prisma } from "@/app/utils/prisma";
import { NextResponse, NextRequest } from "next/server";

export interface IRecommendResponse {
  [category: string]: {
    [subcategory: string]: {
      players: {
        id: number;
        name: string;
        season: string;
        pay: number;
        ovr: number;
        imgSrc: string;
      }[];
      order: number;
    };
  };
}

const prismaRecommend = prisma.recommend.findMany({
  select: {
    category: true,
    subcategory: true,
    subcategoryOrder: true,
    player: {
      select: {
        id: true,
        name: true,
        season: true,
        pay: true,
        ovr: true,
        imgSrc: true,
      },
    },
  },
  orderBy: [
    { category: "asc" },
    {
      subcategoryOrder: "asc",
    },
    { rank: "asc" },
  ],
});

export async function GET() {
  const res = await prismaRecommend;
  const recommend = Object.create(null) as IRecommendResponse;
  res?.map((obj) => {
    Object.prototype.hasOwnProperty.call(recommend, obj.category)
      ? Object.prototype.hasOwnProperty.call(
          recommend[obj.category],
          obj.subcategory
        )
        ? recommend[obj.category][obj.subcategory]["players"].push(obj.player)
        : Object.assign(recommend[obj.category], {
            [obj.subcategory]: {
              players: [obj.player],
              order: obj.subcategoryOrder,
            },
          })
      : Object.assign(recommend, {
          [obj.category]: {
            [obj.subcategory]: {
              players: [obj.player],
              order: obj.subcategoryOrder,
            },
          },
        });
  });
  return NextResponse.json(recommend);
}
