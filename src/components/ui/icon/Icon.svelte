<script lang="ts">
  import type { Icon } from "./types";
  export let name: Icon;
</script>

{#await import(`../../../assets/icons/${name}.svg`) then { default: icon }}
  <img on:click src={icon.src} alt={name} class={$$restProps.class} />
{/await}
