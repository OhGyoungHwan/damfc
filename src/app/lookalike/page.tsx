import Hydrate from "../utils/Hydrate";
import { useSSRGetLookalike } from "../hooks/queries";
import Lookalikes from "../component/Lookalikes";

export default async function Lookalike({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { spid: string | undefined };
}) {
  const spid = parseInt(searchParams?.["spid"] || "247165889");
  const { dehydratedState } = await useSSRGetLookalike(spid);
  return (
    <main className="flex min-h-screen flex-col items-center px-[16px] compact:pl-[88px] compact:pr-[32px] py-[32px] gap-[96px]">
      <Hydrate state={dehydratedState}>
        <Lookalikes spid={spid} />
      </Hydrate>
    </main>
  );
}
