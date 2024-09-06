<script lang="ts">
  import { Input } from "@ui";

  export let search: string = "";
  export let narrow: boolean = false;
</script>

<Input
  type="text"
  bind:value={search}
  placeholder="Game search"
  icon="Glass"
  class="w-full {narrow ? 'max-w-36' : ''}"
/>
