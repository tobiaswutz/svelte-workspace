<script>
  // @ts-nocheck

  // This is done in a single file for clarity. A more factored version here: https://svelte.dev/repl/288f827275db4054b23c437a572234f6?version=3.38.2
  import { flip } from "svelte/animate"
  import { dndzone } from "svelte-dnd-action"

  let board = [
    {
      id: 1,
      name: "BÖHMEN 1",
      items: [
        { id: 1, name: "Nach Böhemn fahren" },
        { id: 2, name: "Nach Böhemn fahren" },
        { id: 3, name: "Nach Böhemn fahren" },
        { id: 4, name: "Nach Böhemn fahren" },
        { id: 5, name: "Nach Böhemn fahren" },
        { id: 6, name: "Nach Böhemn fahren" },
        { id: 7, name: "Nach Böhemn fahren" },
        { id: 8, name: "Nach Böhemn fahren" },
        { id: 9, name: "Nach Böhemn fahren" },
        { id: 10, name: "Nach Böhemn fahren" },
      ],
    },
    {
      id: 2,
      name: "BÖHMEN 2",
      items: [
        { id: 11, name: "Nach Böhemn fahren" },
        { id: 12, name: "Nach Böhemn fahren" },
        { id: 13, name: "Nach Böhemn fahren" },
        { id: 14, name: "Nach Böhemn fahren" },
        { id: 15, name: "Nach Böhemn fahren" },
        { id: 16, name: "Nach Böhemn fahren" },
        { id: 17, name: "Nach Böhemn fahren" },
        { id: 18, name: "Nach Böhemn fahren" },
        { id: 19, name: "Nach Böhemn fahren" },
        { id: 20, name: "Nach Böhemn fahren" },
      ],
    },
    {
      id: 232,
      name: "BÖHMEN 3",
      items: [
        { id: 21, name: "Nach Böhemn fahren" },
        { id: 22, name: "Nach Böhemn fahren" },
        { id: 23, name: "Nach Böhemn fahren" },
        { id: 24, name: "Nach Böhemn fahren" },
        { id: 25, name: "Nach Böhemn fahren" },
        { id: 26, name: "Nach Böhemn fahren" },
        { id: 27, name: "Nach Böhemn fahren" },
        { id: 28, name: "Nach Böhemn fahren" },
        { id: 29, name: "Nach Böhemn fahren" },
        { id: 30, name: "Nach Böhemn fahren" },
      ],
    },
    {
      id: 233242,
      name: "BÖHMEN 4",
      items: [
        { id: 31, name: "Nach Böhemn fahren" },
        { id: 32, name: "Nach Böhemn fahren" },
        { id: 33, name: "Nach Böhemn fahren" },
        { id: 34, name: "Nach Böhemn fahren" },
        { id: 35, name: "Nach Böhemn fahren" },
        { id: 36, name: "Nach Böhemn fahren" },
        { id: 37, name: "Nach Böhemn fahren" },
        { id: 38, name: "Nach Böhemn fahren" },
        { id: 39, name: "Nach Böhemn fahren" },
        { id: 40, name: "Nach Böhemn fahren" },
      ],
    },
    {
      id: 3,
      name: "BÖHMEN 5",
      items: [
        { id: 41, name: "Nach Böhemn fahren" },
        { id: 42, name: "Nach Böhemn fahren" },
        { id: 43, name: "Nach Böhemn fahren" },
        { id: 44, name: "Nach Böhemn fahren" },
        { id: 45, name: "Nach Böhemn fahren" },
        { id: 46, name: "Nach Böhemn fahren" },
        { id: 47, name: "Nach Böhemn fahren" },
        { id: 48, name: "Nach Böhemn fahren" },
        { id: 49, name: "Nach Böhemn fahren" },
        { id: 50, name: "Nach Böhemn fahren" },
      ],
    },
    {
      id: 4,
      name: "BÖHMEN 6",
      items: [
        { id: 51, name: "Nach Böhemn fahren" },
        { id: 52, name: "Nach Böhemn fahren" },
        { id: 53, name: "Nach Böhemn fahren" },
        { id: 54, name: "Nach Böhemn fahren" },
        { id: 55, name: "Nach Böhemn fahren" },
        { id: 56, name: "Nach Böhemn fahren" },
        { id: 57, name: "Nach Böhemn fahren" },
        { id: 58, name: "Nach Böhemn fahren" },
        { id: 59, name: "Nach Böhemn fahren" },
        { id: 60, name: "Nach Böhemn fahren" },
      ],
    },
    {
      id: 5,
      name: "BÖHMEN 7",
      items: [
        { id: 1, name: "Nach Böhemn fahren" },
        { id: 2, name: "Nach Böhemn fahren" },
        { id: 3, name: "Nach Böhemn fahren" },
        { id: 4, name: "Nach Böhemn fahren" },
        { id: 5, name: "Nach Böhemn fahren" },
        { id: 6, name: "Nach Böhemn fahren" },
        { id: 7, name: "Nach Böhemn fahren" },
        { id: 8, name: "Nach Böhemn fahren" },
        { id: 9, name: "Nach Böhemn fahren" },
        { id: 10, name: "Nach Böhemn fahren" },
      ],
    },
  ]

  const dropTargetStyle = {
    border: "none",
  }

  const flipDurationMs = 200
  function handleDndConsiderColumns(e) {
    board = e.detail.items
  }
  function handleDndFinalizeColumns(e) {
    board = e.detail.items
  }
  function handleDndConsiderCards(cid, e) {
    const colIdx = board.findIndex((c) => c.id === cid)
    board[colIdx].items = e.detail.items
    board = [...board]
  }
  function handleDndFinalizeCards(cid, e) {
    const colIdx = board.findIndex((c) => c.id === cid)
    board[colIdx].items = e.detail.items
    board = [...board]
  }
  function handleClick(e) {
    alert("dragabble elements are still clickable :)")
  }
</script>

<section class="h-[calc(100vh-3rem)] min-w-full p-2 bg-[url('/img/ok.jpg')] flex flex-shrink-0 flex-row overflow-x-auto bg-cover" use:dndzone={{ items: board, flipDurationMs, dropTargetStyle, type: "columns" }} on:consider={handleDndConsiderColumns} on:finalize={handleDndFinalizeColumns}>
  <!-- boards -->
  {#each board as column (column.id)}
    <div class="min-h-min w-72 min-w-fit p-2 m-4 float-left overflow-y-hidden bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75 backdrop-blur shadow-md rounded-md" animate:flip={{ duration: flipDurationMs }}>
      <div class="mb-3 flex justify-center items-center font-bold">{column.name}</div>
      <div class="h-[95%] overflow-y-auto overflow-x-hidden" use:dndzone={{ items: column.items, dropTargetStyle, flipDurationMs }} on:consider={(e) => handleDndConsiderCards(column.id, e)} on:finalize={(e) => handleDndFinalizeCards(column.id, e)}>
        <!-- cards -->
        {#each column.items as item (item.id)}
          <div class="h-fit bg-white rounded-md w-64 p-2 m-2 dark:bg-neutral-800 shadow-sm  hover:shadow-lg dark:hover:bg-neutral-700 hover:text-black dark:hover:text-white" animate:flip={{ duration: flipDurationMs }} on:keydown={handleClick} on:click={handleClick}>
            <div>{item.id}.</div>
            <span>{item.name}</span>
          </div>
        {/each}
        <div class="h-1/12 bg-white rounded-md p-2 mx-2 mb-4 dark:bg-neutral-800 shadow-sm  hover:shadow-lg dark:hover:bg-neutral-700 hover:text-black dark:hover:text-white">
          <div class="">new</div>
        </div>
      </div>
    </div>
  {/each}
</section>

<style>
  /* width */
  ::-webkit-scrollbar {
    height: 12px; /* height of horizontal scrollbar ← You're missing this */
    width: 7px; /* width of vertical scrollbar */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(101, 101, 101, 0.75);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(69, 69, 69, 0.75);
  }
</style>
