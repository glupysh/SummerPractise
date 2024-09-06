<script lang="ts">
  import { Input, Button } from "@ui";
  let login: string = "";
  let password: string = "";
</script>

<form
  class="w-full flex flex-col gap-2.5 p-4 items-start"
  on:submit|preventDefault
>
  <Input type="text" bind:value={login} placeholder="Login" />
  <Input type="password" bind:value={password} placeholder="Password" />
  <Button type="text" title="Sign in" />
  <Button
    type="text"
    class="underline decoration-solid underline-offset-4"
    title="Sign up"
  />
</form>
