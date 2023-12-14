import { IClubRES } from "../api/club/route";
import { IRecommendResponse } from "../api/recommend/route";

export const getClub = async () =>
  (await fetch(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/api/club`).then((res) =>
    res.json()
  )) as IClubRES;

export const getRecommend = async () =>
  (await fetch(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/api/recommend`).then(
    (res) => res.json()
  )) as IRecommendResponse;

const GET_CLUB = "get-api-club";
const GET_RECOMMEND = "get-api-recommend";

const queryKeys = {
  GET_CLUB,
  GET_RECOMMEND,
};

export default queryKeys;
