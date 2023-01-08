<script lang="ts">
  import { page } from "$app/stores"
</script>

<div class="overflow-hidden rounded-lg m-8 bg-white shadow">
  <div class="px-4 py-5 sm:p-6">
    <img class="w-16 rounded-full" src={$page.data.session?.user?.image} alt="" />
    <h3 class="text-3xl mt-4 font-bold">{$page.data.session?.user?.name}</h3>
  </div>
</div>
