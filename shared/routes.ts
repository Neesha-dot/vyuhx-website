import { z } from "zod";
import { insertContactMessageSchema } from "./schema";

export const api = {
  contact: {
    submit: {
      method: "POST",
      path: "/api/contact",
      input: insertContactMessageSchema,
      responses: {
        200: z.object({ success: z.boolean(), message: z.string() }),
        400: z.object({ message: z.string() }),
      },
    },
  },
};
