<script lang="ts">
  import { Dropdown } from "@ui";
  import SidebarForm from "./SidebarForm.svelte";
</script>

<Dropdown on:close position="left">
  <SidebarForm />
</Dropdown>
