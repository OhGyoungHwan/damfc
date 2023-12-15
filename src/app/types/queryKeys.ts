import { IClubRES } from "../api/club/route";
import { IPlayerOnPlayerRES } from "../api/lookalike/route";
import { IRecommendResponse } from "../api/recommend/route";

const BASE_URL = "https://damfc-ohgyounghwans-projects.vercel.app";

export const getClub = async () =>
  (await fetch(`${BASE_URL}/api/club`).then((res) => res.json())) as IClubRES;

export const getRecommend = async () =>
  (await fetch(`${BASE_URL}/api/recommend`).then((res) =>
    res.json()
  )) as IRecommendResponse;

export const getLookalike = async (spid: number) =>
  (await fetch(`${BASE_URL}/api/lookalike?spid=${spid}`).then((res) =>
    res.json()
  )) as IPlayerOnPlayerRES;

const GET_CLUB = "get-api-club";
const GET_RECOMMEND = "get-api-recommend";
const GET_LOOKALIKE = "get-api-lookalike";

const queryKeys = {
  GET_CLUB,
  GET_RECOMMEND,
  GET_LOOKALIKE,
};

export default queryKeys;
