<script lang="ts">
  import "../app.css"
  import { page } from "$app/stores"
  import { Toaster } from "svelte-french-toast"
  import { onMount } from "svelte"
  import { goto } from "$app/navigation"
  import { darkmode } from "$lib/stores/appsettings"

  onMount(async () => {
    init()
    if ($page.data.session) {
      console.log($page.data.session.user)
      goto("/app")
    }
  })

  export const init = () => {
    if (localStorage.getItem("dark") === "true") {
      document.documentElement.classList.add("dark")
      darkmode.set(true)
    } else {
      document.documentElement.classList.remove("dark")
      darkmode.set(false)
    }
  }
</script>

<div>
  <slot />
  <Toaster position="bottom-right" />
</div>
