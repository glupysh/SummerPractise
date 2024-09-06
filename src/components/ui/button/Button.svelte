<script lang="ts">
  import Icon from "../icon/Icon.svelte";
  import type { Icon as IconName } from "../icon/types";
  export let title: Optional<string> = undefined;
  export let icon: Optional<IconName> = undefined;
  export let type: "icon" | "social" | "text" = "text";
  export let withArrow: boolean = false;
</script>

{#if type === "text" && title}
  <button
    on:click|stopPropagation
    class="h-min flex items-center gap-1 hover:opacity-50 {$$restProps.class}"
  >
    {title}
    {#if withArrow}
      <Icon name={"Arrow"} />
    {/if}
  </button>
{:else if type === "social" && icon}
  <button on:click|stopPropagation class="h-min hover:opacity-50">
    <Icon name={icon} />
  </button>
{:else if type === "icon" && icon}
  <button
    on:click|stopPropagation
    class="h-10 w-10 flex items-center justify-center rounded-md bg-neutral-800 hover:opacity-50"
  >
    <Icon name={icon} />
  </button>
{/if}
