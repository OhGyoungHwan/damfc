import { classNames } from "@/app/utils/cssfunction";
import { useIsOverflow } from "@/app/hooks/useIsOverflow";
import { IRecommendResponse } from "@/app/api/recommend/route";
import Image from "next/image";
import { useRef } from "react";

export default function PlayerCard({
  player,
}: {
  player: {
    id: number;
    name: string;
    season: string;
    pay?: number;
    ovr?: number;
    imgSrc: string;
  };
}) {
  const ref = useRef(null);
  const isOverflow = useIsOverflow(ref, () => {});
  return (
    <div className="flex justify-start items-start w-[144px] rounded-xl buttonHover">
      <div className="relative overflow-hidden rounded-xl border border-outlineVariant">
        <div className="flex flex-col justify-start items-center w-[144px]">
          <div className="relative flex justify-center px-2 pt-2 pb-1">
            <Image
              alt={`${player.name}`}
              width={128}
              height={128}
              src={`/${player.imgSrc}.webp`}
            />
            <Image
              alt={`${player.season}`}
              src={`/season/${player.season.toLowerCase()}.png`}
              width={30}
              height={24}
              className="inline-block absolute left-1 bottom-0"
            />
          </div>
          <div
            ref={ref}
            className={classNames(
              isOverflow ? "justify-start" : "justify-center",
              "w-full flex items-start px-2 pt-1 pb-2 overflow-x-hidden"
            )}
          >
            <p
              className={classNames(
                isOverflow && "animate-marquee",
                "textBodyLarge text-left text-onSurfaceVariant whitespace-nowrap"
              )}
            >
              {player.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
