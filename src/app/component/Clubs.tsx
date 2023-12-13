"use client";
import { useState } from "react";
import { IClubRES, IClub } from "../api/club/route";
import { useGetClub } from "../hooks/queries";
import Carousel from "./common/Carousel";
import PlayerCard from "./common/PlayerCard";
import SegmentedButton from "./common/SegmentedButton";

const Clubs = () => {
  // 추천 선수 받아오기 [데이터]
  const { data, isSuccess } = useGetClub();

  return (
    <div className="w-full grid grid-cols-1 medium:grid-cols-2 px-[16px] gap-8">
      {isSuccess && <Club controller="gamepad" clubs={data["gamepad"]} />}
      {isSuccess && <Club controller="keyboard" clubs={data["keyboard"]} />}
    </div>
  );
};

const Club = ({
  controller,
  clubs,
}: {
  controller: "gamepad" | "keyboard";
  clubs: IClub[];
}) => {
  // 클럽 이름 리스트
  const clubNames = clubs.map((club) => club.club);

  // 선택 클럽 [데이터]
  const [select, setSelect] = useState(0);

  // 클럽 선택 이벤트 [액션]
  const onClick = (num: number) => setSelect(num);

  return (
    <div className="flex flex-col">
      <h2 className="textHeadlineMedium text-onSurface ml-[20px]">
        {controller == "gamepad" ? "패드" : "키보드"}
      </h2>
      <Carousel
        elements={clubSegmentedButtons(clubNames, select, onClick)}
        spaceBetween={0}
      />
      <Carousel
        elements={carouselElements(clubs[select]["players"])}
        spaceBetween={8}
      />
    </div>
  );
};

const clubSegmentedButtons = (
  clubNames: string[],
  select: number,
  onClick: (num: number) => void,
  isImage?: boolean
) => {
  return clubNames.map((clubName, idx) => (
    <SegmentedButton
      isImage={isImage}
      key={`${clubName}button`}
      selected={select == idx}
      labelText={clubName}
      order={
        idx == 0 ? "first" : idx == clubNames.length - 1 ? "last" : undefined
      }
      onClick={() => onClick(idx)}
    />
  ));
};

const carouselElements = (players: IClub["players"]) => {
  return players.map((player, idx) => (
    <div key={`${player.name}playercard`} className="relative">
      <PlayerCard player={player} />
    </div>
  ));
};

export default Clubs;
