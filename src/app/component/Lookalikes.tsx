"use client";
import { useGetLookalike, useGetRecommend } from "../hooks/queries";
import Carousel from "./common/Carousel";
import PlayerCard from "./common/PlayerCard";
import { IPlayer } from "../api/lookalike/route";

const Lookalikes = ({ spid }: { spid: number }) => {
  // 추천 선수 받아오기 [데이터]
  const { data, isSuccess } = useGetLookalike(spid);

  return (
    <div className="w-full grid grid-cols-1 medium:grid-cols-2 px-[16px] gap-8">
      <div></div>
      <div className="flex flex-row items-center">
        {isSuccess && (
          <div key={`${data.selfPlayer.name}playercard`} className="relative">
            <PlayerCard player={data.selfPlayer} />
          </div>
        )}
        {isSuccess && <Lookalike players={data.likePlayer} />}
      </div>
    </div>
  );
};

const Lookalike = ({ players }: { players: IPlayer[] }) => {
  return <Carousel elements={carouselElements(players)} spaceBetween={8} />;
};

const carouselElements = (players: IPlayer[]) => {
  return players.map((player, idx) => (
    <div key={`${player.name}playercard`} className="relative">
      <PlayerCard player={player} />
    </div>
  ));
};

export default Lookalikes;
