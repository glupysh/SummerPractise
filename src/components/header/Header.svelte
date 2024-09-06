<script lang="ts">
  import { AccountButton, AccountDropdown } from "@/components/account";
  import { SidebarButton, SidebarDropdown } from "@/components/menu/sidebar";
  import { GameInput, GamesButton, BlogButton } from "@/components/menu";
  import Logo from "@/components/logo/Logo.svelte";
  import {
    SocialsRow,
    SocialsButton,
    SocialsDropdown,
  } from "@/components/socials";
  import { LanguageButton, LanguageDropdown } from "@/components/language";

  let headerPaddingClass: string;
  $: headerPaddingClass =
    innerWidth >= 1200 ? "px-16" : innerWidth >= 992 ? "px-10" : "px-2";

  let innerWidth = window.innerWidth;
  let accountDropdownPosition: number | null = null;
  let languageDropdownPosition: number | null = null;
  let socialsDropdownPosition: number | null = null;
  let showSidebarDropdown = false;

  const toggleAccountDropdown = (e) => {
    if (accountDropdownPosition) {
      accountDropdownPosition = null;
      return;
    }

    const el = e.srcElement;
    const { left, width } = el.getBoundingClientRect();

    accountDropdownPosition = left + width / 2;
  };
  const closeAccountDropdown = () => (accountDropdownPosition = null);

  const toggleLanguageDropdown = (e) => {
    if (languageDropdownPosition) {
      languageDropdownPosition = null;
      return;
    }

    const el = e.srcElement;
    const { left, width } = el.getBoundingClientRect();

    languageDropdownPosition = left + width / 2;
  };
  const closeLanguageDropdown = () => (languageDropdownPosition = null);

  const toggleSocialsDropdown = (e) => {
    if (socialsDropdownPosition) {
      socialsDropdownPosition = null;
      return;
    }

    const el = e.srcElement;
    const { left, width } = el.getBoundingClientRect();

    socialsDropdownPosition = left + width / 2;
  };
  const closeSocialsDropdown = () => (socialsDropdownPosition = null);

  const toggleSidebarDropdown = () =>
    (showSidebarDropdown = !showSidebarDropdown);
  const closeSidebarDropdown = () => (showSidebarDropdown = false);
</script>

<svelte:window bind:innerWidth />

<header class="h-12 bg-black sticky top-0 {headerPaddingClass}">
  <div class="w-full h-full m-auto flex items-center justify-between">
    <div>
      <!-- left -->
      {#if innerWidth < 992}
        <SidebarButton on:click={toggleSidebarDropdown} />
      {/if}
      {#if showSidebarDropdown}
        <SidebarDropdown on:close={closeSidebarDropdown} />
      {/if}
    </div>

    <nav class="flex items-center gap-10">
      <!-- center -->
      <Logo />
      {#if innerWidth >= 992}
        <GamesButton />
        <BlogButton />
      {/if}
    </nav>

    <div class="flex items-center gap-16">
      <!-- right -->
      {#if innerWidth >= 992}
        <GameInput narrow />
      {/if}
      <AccountButton on:click={toggleAccountDropdown} />
      {#if accountDropdownPosition}
        <AccountDropdown
          left={accountDropdownPosition}
          on:close={closeAccountDropdown}
        />
      {/if}
      {#if innerWidth >= 992}
        <LanguageButton on:click={toggleLanguageDropdown} />
        {#if languageDropdownPosition}
          <LanguageDropdown
            left={languageDropdownPosition}
            on:close={closeLanguageDropdown}
          />
        {/if}
      {/if}
      {#if innerWidth >= 1200}
        <SocialsRow />
      {:else if innerWidth >= 992}
        <SocialsButton on:click={toggleSocialsDropdown} />
        {#if socialsDropdownPosition}
          <SocialsDropdown
            left={socialsDropdownPosition}
            on:close={closeSocialsDropdown}
          />
        {/if}
      {/if}
    </div>
  </div>
</header>
<div>{innerWidth}</div>

<style>
	header {
    color: white;
  }
</style>
