import { http, HttpResponse } from "msw";
import { moviesMock } from "./moviesMock";

export const handlers = [
  http.get(import.meta.env.VITE_API_URL, () => {
    return HttpResponse.json(moviesMock);
  }),
];
