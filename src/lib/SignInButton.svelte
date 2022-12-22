<script lang="ts">
  export let provider: any
</script>

<form class="bg-red-500" action={provider.signinUrl} method="POST">
  {#if provider.callbackUrl}
    <input type="hidden" name="callbackUrl" value={provider.callbackUrl} />
  {/if}
  <button type="submit" class="button">
    <slot>Sign in with {provider.name}</slot>
  </button>
</form>
