import { writable } from "svelte/store";

export enum Language {
  ENGLISH = "English",
  RUSSIAN = "Russian",
  CHINESE = "Chinese",
}

export const language = writable<Language>(Language.ENGLISH);
