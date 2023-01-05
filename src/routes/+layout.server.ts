import type { LayoutServerLoad } from "./$types"
import { session } from "$lib/stores/appsettings"
import { get } from "svelte/store";


export const load: LayoutServerLoad = async (event) => {
  return {
    session: await event.locals.getSession(),
    customSession: get(session)
  }
}
