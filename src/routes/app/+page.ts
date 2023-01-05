import { redirect } from "@sveltejs/kit"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ parent }) => {
  const { session } = await parent();
  const { customSession } = await parent();
  console.log("session", session);
  console.log("customSession", customSession);

  
  if (!session?.user && customSession?.user) { throw redirect(302, "/login") }
  return {}
}


