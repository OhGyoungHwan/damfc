"use client";
import { useState } from "react";
import { useGetRecommend } from "../hooks/queries";
import Carousel from "./common/Carousel";
import PlayerCard from "./common/PlayerCard";
import SegmentedButton from "./common/SegmentedButton";
import { IRecommendResponse } from "../api/recommend/route";
import { classNames } from "../utils/cssfunction";

const Recommends = () => {
  // 추천 선수 받아오기 [데이터]
  const { data, isSuccess } = useGetRecommend();

  return (
    <div className="w-full grid grid-cols-1 medium:grid-cols-2 px-[16px] gap-8">
      {isSuccess && (
        <Recommend category="포지션" categoryPlayer={data["포지션"]} />
      )}
      {isSuccess && (
        <Recommend category="시즌" categoryPlayer={data["시즌"]} isImage />
      )}
    </div>
  );
};

const Recommend = ({
  category,
  categoryPlayer,
  isImage,
}: {
  category: string;
  categoryPlayer: IRecommendResponse[""];
  isImage?: boolean;
}) => {
  // 서브카테고리 리스트 [데이터]
  const subcategorys = Object.keys(categoryPlayer).sort(
    (pre, next) => categoryPlayer[pre].order - categoryPlayer[next].order
  );

  // 선택 서브카테고리 [데이터]
  const [select, setSelect] = useState(subcategorys[0]);

  // 서브카테고리 선택 이벤트 [액션]
  const onClick = (subcategory: string) => setSelect(subcategory);

  return (
    <div className="flex flex-col">
      <h2 className="textHeadlineMedium text-onSurface ml-[20px]">
        {category}
      </h2>
      <Carousel
        elements={subcategorySegmentedButtons(
          subcategorys,
          select,
          onClick,
          isImage
        )}
        spaceBetween={0}
      />
      <Carousel
        elements={carouselElements(categoryPlayer[select]["players"])}
        spaceBetween={8}
      />
    </div>
  );
};

const subcategorySegmentedButtons = (
  subcategorys: string[],
  select: string,
  onClick: (subcategory: string) => void,
  isImage?: boolean
) => {
  return subcategorys.map((subcategory, idx) => (
    <SegmentedButton
      isImage={isImage}
      key={`${subcategory}button`}
      selected={select == subcategory}
      labelText={subcategory}
      order={
        idx == 0 ? "first" : idx == subcategorys.length - 1 ? "last" : undefined
      }
      onClick={() => onClick(subcategory)}
    />
  ));
};

const carouselElements = (players: IRecommendResponse[""][""]["players"]) => {
  return players.map((player, idx) => (
    <div key={`${player.name}playercard`} className="relative">
      <PlayerCard player={player} />
    </div>
  ));
};

export default Recommends;
