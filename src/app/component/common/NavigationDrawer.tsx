import { classNames } from "../../utils/cssfunction";

export default function NavigationDrawer({ folded }: { folded: boolean }) {
  return (
    <div
      className={classNames(
        folded ? "-left-[360px]" : "left-[80px]",
        "fixed z-10 transition-all duration-500 ease-in-out flex flex-col justify-start items-start w-[360px] min-h-screen p-3 rounded-r-2xl bg-surfaceContainerHigh border-l border-surfaceVariant"
      )}
    >
      <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 h-14 relative gap-2.5 pl-4 pr-2 py-2">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[336px] text-sm font-medium text-left text-onSurfaceVariant">
          Title
        </p>
      </div>
    </div>
  );
}
