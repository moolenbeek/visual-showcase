import { toasts } from "./toast-store";
import ToastContainer from "./toast-container.svelte";

export { toasts, ToastContainer };

export function toast(props: {
    title: string;
    description: string;
    variant?: "default" | "destructive";
    duration?: number;
}) {
    toasts.add({
        title: props.title,
        description: props.description,
        variant: props.variant ?? "default",
        duration: props.duration ?? 5000
    });
} 