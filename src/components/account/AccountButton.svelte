<script lang="ts">
  import { Button } from "@ui";

  let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth >= 992}
  <Button on:click title="Account" type="text" withArrow />
{:else}
  <Button on:click icon="Account" type="icon" />
{/if}
