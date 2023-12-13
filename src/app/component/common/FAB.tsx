import { classNames } from "../../utils/cssfunction";
import Tooltips from "./Tooltips";

export default function FAB({
  iconName,
  size,
  supportingText,
}: {
  iconName: string;
  size: "small" | "large" | "normal";
  supportingText: string;
}) {
  const containerOption =
    size == "small"
      ? "w-[40px] h-[40px] rounded-[12px]"
      : size == "large"
      ? "w-[96px] h-[96px] rounded-[28px]"
      : size == "normal"
      ? "w-[56px] h-[56px] rounded-[16px]"
      : "";

  const iconOption =
    size == "small"
      ? "text-[24px]"
      : size == "large"
      ? "text-[36px]"
      : size == "normal"
      ? "text-[24px]"
      : "";
  return (
    <button
      className={classNames(
        containerOption,
        "group relative flex justify-center items-center bg-primaryContainer stateHover"
      )}
    >
      <div className="flex justify-center items-center relative p-4 text-onPrimaryContainer">
        <span className={classNames(iconOption, "material-symbols-outlined")}>
          {iconName}
        </span>
      </div>
      <Tooltips supportingText={supportingText} />
    </button>
  );
}
