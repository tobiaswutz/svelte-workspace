<script lang="ts">
  import { darkmode } from "$lib/stores/appsettings"
  import { navigating } from "$app/stores"
  import toast from "svelte-french-toast"
  import { goto } from "$app/navigation"
  import { page } from "$app/stores"

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark', 'false');
        darkmode.set(false);
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark', 'true');
        darkmode.set(true);
    }
  }

  const menuItems = [
    { name: "HOME", link: "/app" },
    { name: "BOARD", link: "/app/board" },
  ]
  $: if ($navigating) open = false
  let open = false
</script>

<nav
  class="h-12 sticky top-0 z-50 bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75 backdrop-blur shadow-md"
>
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex h-12 items-center justify-between">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <button on:click={() => goto("/app")} class="animate-spin-slow">
            {#if $darkmode}
              <span class="text-3xl">🌕</span>
            {:else}
              <span class="text-3xl">🌑</span>
            {/if}
          </button>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            {#each menuItems as item}
              {#if $page.url.pathname === item.link}
                <a
                  href={item.link}
                  class="rounded-md bg-black px-3 py-1 text-xs font-bold text-white dark:bg-white dark:text-black"
                  >{item.name}</a
                >
              {:else}
                <a
                  href={item.link}
                  class="rounded-md px-3 py-1 text-xs font-bold text-gray-700 dark:text-white dark:hover:bg-gray-800 hover:bg-gray-200 hover:font-bold hover:text-black"
                  >{item.name}</a
                >
              {/if}
            {/each}
          </div>
        </div>
      </div>
      <div class="hidden sm:ml-6 sm:block">
        <div class="flex items-center">
          <button class="mr-6" on:click={() => toggleDarkMode()}>
            {#if $darkmode}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="text-white w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            {:else}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            {/if}
          </button>
          <span class="dark:text-white">{$page.data.session?.user?.name}</span>
          {#if $page.data.session}
            <div class="relative ml-3">
              <div>
                <button
                  on:click={() => (open = !open)}
                  type="button"
                  class="flex rounded-full bg-gray-800 text-sm focus:outline-none"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-6 w-6 {open && 'h-9 w-9'} rounded-full"
                    src={$page.data.session?.user?.image}
                    alt=""
                  />
                </button>
              </div>

              {#if open}
                <div
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <a
                    href="/app/profile"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2">Mein Profil</a
                  >
                  <a
                    href="/app/settings"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2">Einstellungen</a
                  >
                  <a
                    href="/auth/signout"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-2"
                    id="user-menu-item-2">Sign out</a
                  >
                </div>
              {/if}
            </div>
          {:else}
            <a
              href="/auth/signin"
              class="ml-6 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Sign in
            </a>
          {/if}
        </div>
      </div>
      <div class="-mr-2 flex sm:hidden">
        <button class="mr-6" on:click={() => toggleDarkMode()}>
          {#if $darkmode}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          {/if}
        </button>
        <button
          on:click={() => (open = !open)}
          type="button"
          class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          {#if open}
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          {:else}
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  {#if open}
    <div
      class="sm:hidden bg-white text-black dark:bg-neutral-900 dark:text-white"
      id="mobile-menu"
    >
      <div class="space-y-1 px-2 pt-2 pb-3">
        {#each menuItems as item}
          {#if $page.url.pathname === item.link}
            <a
              href={item.link}
              class="block rounded-md bg-gray-900 dark:bg-white dark:text-black px-3 py-2 text-base font-medium text-white"
              >{item.name}</a
            >
          {:else}
            <a
              href={item.link}
              class="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
              >{item.name}</a
            >
          {/if}
        {/each}
      </div>
      <div class="border-t border-gray-700 pt-4 pb-3">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src={$page.data.session?.user?.image}
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium">Tom Cook</div>
            <div class="text-sm font-medium">tom@example.com</div>
          </div>
        </div>

        <div class="mt-3 space-y-1 px-2">
          <a
            href="/app/profile"
            class="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            >Your Profile</a
          >
          <a
            href="/app/settings"
            class="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            >Einstellungen</a
          >
          <a
            href="/auth/signout"
            class="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  {/if}
</nav>
