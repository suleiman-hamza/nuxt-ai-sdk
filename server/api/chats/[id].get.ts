import { z } from "zod";

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event);

  const { id } = await getValidatedRouterParams(event, (data) =>
    z
      .object({
        id: z.string(),
      })
      .parse(data),
  );

  return await getChat({ chatId: id, session });
});
