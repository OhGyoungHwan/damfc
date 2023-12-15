import queryKeys, { getLookalike } from "../types/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getClub, getRecommend } from "../types/queryKeys";
import { getQueryClient } from "../utils/getQueryClient";
import { dehydrate } from "@tanstack/query-core";

export function useGetClub() {
  return useQuery({
    queryKey: [queryKeys.GET_CLUB],
    queryFn: () => getClub(),
  });
}

export function useGetRecommend() {
  return useQuery({
    queryKey: [queryKeys.GET_RECOMMEND],
    queryFn: () => getRecommend(),
  });
}

export function useGetLookalike(spid: number) {
  return useQuery({
    queryKey: [`${queryKeys.GET_LOOKALIKE}${spid}`],
    queryFn: () => getLookalike(spid),
  });
}

export async function useSSRGetHome() {
  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: [queryKeys.GET_CLUB],
    queryFn: () => getClub(),
  });
  await client.prefetchQuery({
    queryKey: [queryKeys.GET_RECOMMEND],
    queryFn: () => getRecommend(),
  });
  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });
  return { dehydratedState: dehydratedState };
}

export async function useSSRGetLookalike(spid: number) {
  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: [`${queryKeys.GET_LOOKALIKE}${spid}`],
    queryFn: () => getLookalike(spid),
  });
  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });
  return { dehydratedState: dehydratedState };
}
