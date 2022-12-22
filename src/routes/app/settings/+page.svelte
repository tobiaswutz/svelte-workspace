<script lang="ts">
import {
    page
} from "$app/stores"

// $page.data.session?.user?.image
//   bind:value={$user.email}
</script>

<div class="overflow-hidden rounded-lg m-8 bg-white shadow">
    <div class="px-4 py-5 sm:p-6">
        <img class="w-16 rounded-full" src="{$page.data.session?.user?.image}" alt="">
        <h3 class="text-3xl mt-4 font-bold">{$page.data.session?.user?.name}</h3>

        <div class="col-span-6 sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        </div>

        <h1>Nein ich</h1>

    </div>
</div>
