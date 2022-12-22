<script lang="ts">
  import { Toaster } from "svelte-french-toast"
  import Navbar from "$lib/components/navbar.svelte"
</script>

<div>
  <Navbar />
  <slot />
</div>
