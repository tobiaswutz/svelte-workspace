<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores"
  import { Toaster } from 'svelte-french-toast';
    import { onMount } from "svelte"
    import { goto } from "$app/navigation"

  onMount(async () => {
    if($page.data.session) {
      console.log($page.data.session.user)
         goto("/app")
    }
  })

</script>

<div>
  <slot />
  <Toaster position="bottom-right" />
</div>
