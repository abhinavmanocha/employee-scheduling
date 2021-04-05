import { writable } from "svelte/store";

export const user = writable(localStorage.getItem('user'));
export const token = writable(localStorage.getItem('token'));
export const jwt = writable(localStorage.getItem('jwt'));
export const loggedUser = writable(localStorage.getItem('loggedUser'));