<script lang="ts">
  import { Button } from "@ui";
  import { language, Language } from "@stores/language";

  let active: Language;
  language.subscribe((value) => (active = value));
</script>

<Button on:click title={active.slice(0, 2)} type="text" withArrow />
