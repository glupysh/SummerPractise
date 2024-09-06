<script lang="ts">
  import type { FormEventHandler } from "svelte/elements";
  import Icon from "../icon/Icon.svelte";
  import type { Icon as IconName } from "../icon/types";
  import open from "@icons/Open.svg";
  import closed from "@icons/Closed.svg";

  export let type: string = "text";
  export let value: string = "";
  export let placeholder: string = "";
  export let icon: IconName | undefined = undefined;

  const onInput: FormEventHandler<HTMLInputElement> = (e) =>
    (value = (e.currentTarget as HTMLInputElement).value);

  let showPassword = false;

  const toggleVisibility = () => {
    showPassword = !showPassword;
  };

  let inputElement: HTMLInputElement | null = null;

  const focusInput = () => {
    if (inputElement) {
      inputElement.focus();
    }
  };
</script>

<div class="bg-neutral-800 h-7 rounded-full px-3 flex items-center justify-between {$$restProps.class}">
  {#if icon}
    <Icon name={icon} on:click={focusInput} class="cursor-pointer" />
  {/if}

  {#if type === "password"}
    <input
      bind:this={inputElement}
      class="bg-neutral-800 h-full placeholder:text-neutral-700 text-white w-full"
      type={showPassword ? "text" : "password"}
      {value}
      on:input={onInput}
      {placeholder}
    />
    <img on:click={toggleVisibility} alt="toggle visibility" src={showPassword ? open.src : closed.src} class="h-4 w-4" />
  {:else}
    <input
      bind:this={inputElement}
      class="bg-neutral-800 h-full placeholder:text-neutral-700 text-white w-full"
      type={type}
      {value}
      on:input={onInput}
      {placeholder}
    />
  {/if}
</div>

