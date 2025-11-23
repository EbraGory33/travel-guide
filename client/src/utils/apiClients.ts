import axios from "axios";

const Base_API_URL = import.meta.env.VITE_SERVER_URL;

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const apiClient = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function apiFetch(
  path = Base_API_URL,
  includeCredentials = false,
  method: HttpMethod = "GET",
  data?: any
) {
  try {
    const config = {
      url: path.startsWith("http")
        ? path
        : new URL(path, Base_API_URL).toString(),
      method,
      withCredentials: includeCredentials ? true : false,
      data: ["POST", "PUT", "PATCH", "DELETE"].includes(method)
        ? data
        : undefined,
      params: method === "GET" ? data : undefined,
    };

    const response = await apiClient(config);
    return response.data;
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "response" in error &&
      typeof (error as any).response === "object" &&
      (error as any).response !== null &&
      "data" in (error as any).response
    ) {
      const err = error as { response: { data: { error?: string } } };
      throw new Error(err.response.data.error || "API request failed");
    } else if (error instanceof Error) {
      throw new Error(error.message || "API request failed");
    } else {
      throw new Error("API request failed");
    }
  }
}
