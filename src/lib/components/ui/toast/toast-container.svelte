<script lang="ts">
    import { toasts } from "./toast-store";
    import Toast from "./toast.svelte";
</script>

<div class="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
    {#each $toasts as toast (toast.id)}
        <Toast
            title={toast.title}
            description={toast.description}
            variant={toast.variant}
            duration={toast.duration}
            onClose={() => toasts.remove(toast.id)}
        />
    {/each}
</div> 