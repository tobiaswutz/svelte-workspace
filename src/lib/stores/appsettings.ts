import { writable } from 'svelte/store';

export const darkmode = writable(false);


export const init = () => {
    if (localStorage.getItem('dark') === 'true') {
        document.documentElement.classList.add('dark')
        darkmode.set(true)
    } else {
        document.documentElement.classList.remove('dark');
        darkmode.set(false)
    }
}




export const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark', 'false');
        darkmode.set(false);
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark', 'true');
        darkmode.set(true);
    }
};