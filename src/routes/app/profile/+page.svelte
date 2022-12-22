<script lang="ts">
  import { page } from "$app/stores"
  import Card from "$lib/components/card.svelte"
  import Button from "$lib/components/button.svelte"
  import toast from "svelte-french-toast"
  import { onMount } from "svelte"
  import { get } from "svelte/store"
  import { json } from "@sveltejs/kit"

  let users: any[] = []

  onMount(async () => {
    const users = await getUsers()
    console.log(users)
  })

  const getUsers = async () => {
    const res = await fetch("https://randomuser.me/api/?results=30")
    const data = await res.json()
    return data.results
  }

  let promise = getUsers()
</script>

<main class="grid grid-cols-3 p-4">
  {#await promise}
    <p>...waiting</p>
  {:then user}
    {#each user as user}
      <Card>
        <div class="mx-auto">
          <img class="rounded-full w-28" src={user.picture.large} alt="" />
          <h1 class="text-4xl mb-4">{user.name.first}</h1>
          <Button
            on:click={() =>
              toast.success(
                `Freundschaftsanfrage an ${user.name.title} ${user.name.first} ${user.name.last} verschickt`
              )}>add friend</Button
          >
        </div>
      </Card>
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</main>
