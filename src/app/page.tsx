import Clubs from "./component/Clubs";
import Recommends from "./component/Recommends";
import Hydrate from "./utils/Hydrate";
import { useSSRGetHome } from "./hooks/queries";

export default async function Home() {
  const { dehydratedState } = await useSSRGetHome();
  return (
    <main className="flex min-h-screen flex-col items-center px-[16px] compact:pl-[88px] compact:pr-[32px] py-[32px] gap-[96px]">
      <Hydrate state={dehydratedState}>
        <Recommends />
        <Clubs />
      </Hydrate>
    </main>
  );
}
