import { writable } from "svelte/store";

export const user = writable(null);
export const pass = writable(null);
export const logged = writable(false);
export const token = writable(localStorage.getItem('token'));