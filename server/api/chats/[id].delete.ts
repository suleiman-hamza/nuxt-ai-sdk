import { z } from "zod";
import { useDrizzle } from "~~/server/utils/drizzle";

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event);

  const { id } = await getValidatedRouterParams(event, (data) =>
    z
      .object({
        id: z.string(),
      })
      .parse(data),
  );

  const db = useDrizzle();

  return await db
    .delete(tables.chats)
    .where(
      and(
        eq(tables.chats.id, id as string),
        eq(tables.chats.userId, session.user?.id || session.id),
      ),
    )
    .returning();
});
