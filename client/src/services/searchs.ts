import { apiFetch } from "../utils/apiClients.ts";

export const searchResults = async (location: string) => {
  const results = await apiFetch("/results/search", false, "GET", { location });
  return results;
};

// export const getDetails = async (location: string) => {
//   const results = await apiFetch("/results/detail", false, "GET", { location });
//   return results;
// };

export const getDetails = async (id: any) => {
  return apiFetch(`/results/detail?id=${encodeURIComponent(id)}`);
};

export const getAttractions = async ({
  lon,
  lat,
  radius,
}: {
  lon: number;
  lat: number;
  radius: number;
}) => {
  return apiFetch("/results/attractions", false, "GET", { lon, lat, radius });
};
