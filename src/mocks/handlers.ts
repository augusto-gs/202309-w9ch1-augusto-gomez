import { http, HttpResponse } from "msw";
import { charactersMock } from "./charactersMock";

export const handlers = [
  http.get(import.meta.env.VITE_API_URL, () => {
    return HttpResponse.json(charactersMock);
  }),
];
