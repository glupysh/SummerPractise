<script lang="ts">
  import { Dropdown } from "@ui";
  import { Button, type IconName } from "@ui";

  const socials: IconName[] = [
    "Youtube",
    "Facebook",
    "Twitch",
    "Twitter",
    "Discord",
    "Instagram",
  ];

  export let left: Optional<number> = undefined;
</script>

<Dropdown on:close position="center" left={left - 60} class="w-30">
  <div class="grid grid-cols-3 items-center gap-4">
    {#each socials as social}
      <Button icon={social} type="social"></Button>
    {/each}
  </div>
</Dropdown>
