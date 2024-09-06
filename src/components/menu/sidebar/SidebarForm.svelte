<script lang="ts">
  import SocialsRow from "@/components/socials/Socials.svelte";
  import GamesButton from "../GamesButton.svelte";
  import BlogButton from "../BlogButton.svelte";
  import GameInput from "../GameInput.svelte";
  import LanguageTabs from "@/components/language/LanguageTabs.svelte";

  let search: string = "";
</script>

<form
  class="w-full flex flex-col gap-2.5 p-4 items-start"
  on:submit|preventDefault
>
  <GamesButton />
  <BlogButton />
  <GameInput bind:search class="w-full" />
  <LanguageTabs />
  <SocialsRow />
</form>
