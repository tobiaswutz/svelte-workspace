import { writable } from 'svelte/store';

export const darkmode = writable(false);
export const session = writable({
    user: 'Tobias',
    expires: 'keine Ahnung'
});