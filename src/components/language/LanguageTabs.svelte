<script lang="ts">
  import { Button } from "@ui";
  import { language, Language } from "@stores/language";

  const languages = Object.values(Language);

  let active: Language;
  language.subscribe((value) => (active = value));

  const setActive = (lang) => language.set(lang);
</script>

<div class="flex">
  {#each languages as lang}
    <Button
      type="text"
      title={lang}
      class={lang === active ? "" : "text-neutral-400"}
      on:click={() => setActive(lang)}
    />
    <span class="last:hidden">&nbsp;/&nbsp;</span>
  {/each}
</div>
