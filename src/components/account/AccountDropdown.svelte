<script lang="ts">
  import { Dropdown } from "@ui";
  import AccountForm from "./AccountForm.svelte";

  export let left: Optional<number> = undefined;

  let innerWidth: number;

  let position: string = "right";
  $: position = innerWidth >= 992 ? "center" : "right";
</script>

<svelte:window bind:innerWidth />

<Dropdown on:close {position} left={left - 120}>
  <AccountForm />
</Dropdown>
