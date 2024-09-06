<script lang="ts">
  import { Button, type IconName } from "@ui";

  const socials: IconName[] = [
    "Youtube",
    "Facebook",
    "Twitch",
    "Twitter",
    "Discord",
    "Instagram",
  ];
</script>

<div class="flex items-center gap-4">
  {#each socials as social}
    <Button icon={social} type="social"></Button>
  {/each}
</div>
