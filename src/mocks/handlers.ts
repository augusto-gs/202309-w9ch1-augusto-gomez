import { http, HttpResponse } from "msw";
import { moviesMock } from "./moviesMock";
import { movieMock } from "./movieMock";

export const handlers = [
  http.get(import.meta.env.VITE_API_URL, () => {
    return HttpResponse.json(moviesMock);
  }),

  http.patch(`${import.meta.env.VITE_API_URL}/1`, () => {
    return HttpResponse.json({
      ...movieMock,
      hasBeenSeen: !movieMock.hasBeenSeen,
    });
  }),
];
