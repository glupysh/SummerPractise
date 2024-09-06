<script lang="ts">
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { CloseButton } from "@ui";
  import { config } from "./config";

  export let position: "left" | "right" | "center" = "left";
  export let left: Optional<number> = undefined;

  const dispatch = createEventDispatcher();

  let innerWidth: number;

  let containerRound: string;
  let containerPosition: string;
  let buttonClasses: string;
  let style: string;
  $: containerRound = config[position].round;
  $: containerPosition = config[position].position;
  $: buttonClasses =
    position === "right" ? "self-end" : position === "left" ? "self-start" : "";
  $: style = left && position === "center" ? `left: ${left}px` : "";

  const onCloseButtonClick = () => dispatch("close");
</script>

<svelte:window bind:innerWidth />

<aside
  transition:fade={{ duration: 100 }}
  class="bg-neutral-950 fixed top-0 flex flex-col gap-0 px-2 py-1.5 {containerRound} {containerPosition} {$$restProps.class ??
    'w-60'}"
  {style}
>
  {#if innerWidth < 992}
    <CloseButton on:click={onCloseButtonClick} class={buttonClasses} />
  {/if}
  <slot />
</aside>
