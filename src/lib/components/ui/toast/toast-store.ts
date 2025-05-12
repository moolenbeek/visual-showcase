import { writable } from 'svelte/store';

type Toast = {
    id: string;
    title: string;
    description: string;
    variant: "default" | "destructive";
    duration: number;
};

function createToastStore() {
    const { subscribe, update } = writable<Toast[]>([]);

    return {
        subscribe,
        add: (toast: Omit<Toast, 'id'>) => {
            const id = Math.random().toString(36).slice(2);
            update((toasts) => [...toasts, { ...toast, id }]);
            if (toast.duration !== Infinity) {
                setTimeout(() => {
                    update((toasts) => toasts.filter((t) => t.id !== id));
                }, toast.duration);
            }
        },
        remove: (id: string) => {
            update((toasts) => toasts.filter((t) => t.id !== id));
        }
    };
}

export const toasts = createToastStore(); 