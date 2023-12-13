import Image from "next/image";
import { classNames } from "../../utils/cssfunction";

export default function SegmentedButton({
  selected,
  labelText,
  order,
  isImage,
  onClick,
}: {
  selected: boolean;
  labelText: string;
  order?: "first" | "last";
  isImage?: boolean;
  onClick: () => void;
}) {
  return (
    <div className="group flex justify-center items-center flex-grow h-[40px] py-1">
      <button
        className={classNames(
          selected && "text-onSecondaryContainer bg-secondaryContainer",
          order == "first" && "rounded-l-full",
          order == "last" && "rounded-r-full",
          "flex flex-col justify-center items-center self-stretch flex-grow overflow-hidden border border-outline"
        )}
        onClick={onClick}
      >
        <div className="flex justify-center items-center self-stretch flex-grow relative gap-2 px-3 py-2.5">
          <p
            className={classNames(
              selected && "text-onSecondaryContainer",
              "flex-grow-0 flex-shrink-0 textLabelLarge text-center text-onSurface group-hover:text-onSecondaryContainer"
            )}
          >
            {isImage ? (
              <Image
                alt={`${labelText}라벨`}
                src={`/season/${labelText}.png`}
                width={30}
                height={24}
                className="inline-block"
                loading="lazy"
              />
            ) : (
              labelText
            )}
          </p>
        </div>
      </button>
    </div>
  );
}
