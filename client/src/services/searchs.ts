import { apiFetch } from "../utils/apiClients.ts";

export const searchResults = async (location: string) => {
  const results = await apiFetch("/results/search", false, "GET", { location });
  return results;
};

export const getDetails = async (location: string) => {
  const results = await apiFetch("/results/");
};
