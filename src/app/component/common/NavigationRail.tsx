"use client";
import { Dispatch, SetStateAction, useState } from "react";
import FAB from "./FAB";
import NavigationDrawer from "./NavigationDrawer";

export default function NavigationRail() {
  const [isFolded, setIsFolded] = useState(true);
  return (
    <>
      <div className="fixed z-20 hidden medium:flex flex-col justify-start items-start min-h-screen w-[80px] gap-[60px] pt-11 pb-14 bg-surfaceContainerHigh">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-20 gap-1">
          <div className="flex justify-start items-start gap-2.5">
            <FAB iconName="group" size="normal" supportingText="내 라인업" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-20 overflow-hidden gap-[12px]">
          <Label
            iconName="login"
            labelText="로그인"
            setIsFolded={setIsFolded}
          />
          <Label
            iconName="search"
            labelText="선수 검색"
            setIsFolded={setIsFolded}
          />
          <Label iconName="list" labelText="라인업" setIsFolded={setIsFolded} />
        </div>
      </div>
      <NavigationDrawer folded={isFolded} />
    </>
  );
}

const Label = ({
  iconName,
  labelText,
  setIsFolded,
}: {
  iconName: string;
  labelText: string;
  setIsFolded: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={(e) => setIsFolded((pre) => !pre)}
      className="group flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-14 relative gap-1"
    >
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden rounded-full group-hover:bg-secondaryContainer">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-4 py-1">
          <span className="material-symbols-outlined text-onSurfaceVariant group-hover:text-onSecondaryContainer">
            {iconName}
          </span>
        </div>
      </div>
      <p className="self-stretch w-full textLabelMedium text-center text-onSurfaceVariant group-hover:text-onSurface">
        {labelText}
      </p>
    </button>
  );
};
