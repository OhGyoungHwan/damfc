export default function Tooltips({
  supportingText,
}: {
  supportingText: string;
}) {
  return (
    <div className="hidden absolute whitespace-nowrap bottom-0  translate-y-full group-hover:flex flex-col justify-center items-center gap-2.5 px-2 py-1 rounded bg-inverseSurface">
      <p className="text-left textBodySmall text-inverseOnSurface">
        {supportingText}
      </p>
    </div>
  );
}
