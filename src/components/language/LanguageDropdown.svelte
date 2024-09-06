<script lang="ts">
  import { Button, Dropdown } from "@ui";
  import { language, Language } from "@stores/language";

  export let left: Optional<number> = undefined;

  let active: Language;
  language.subscribe((value) => (active = value));

  const languages = Object.values(Language);

  const setActive = (lang) => language.set(lang);
</script>

<Dropdown on:close position="center" left={left - 40} class="w-20">
  <div class="flex flex-col gap-2.5 m-auto">
    {#each languages as lang}
      {#if lang !== active}
        <Button type="text" title={lang} on:click={() => setActive(lang)} />
      {/if}
    {/each}
  </div>
</Dropdown>
