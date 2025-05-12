<script lang="ts">
    import { cn } from "$lib/utils";
    import { flyAndScale } from "$lib/utils";
    import { X } from "lucide-svelte";
    import { Button } from "../button";

    export let title: string;
    export let description: string;
    export let variant: "default" | "destructive" = "default";
    export let duration = 5000;
    export let onClose: () => void;
</script>

<div
    class={cn(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
        variant === "default" ? "bg-background border" : "destructive group border-destructive bg-destructive text-destructive-foreground"
    )}
    in:flyAndScale={{ duration: 200 }}
    out:flyAndScale={{ duration: 200 }}
>
    <div class="grid gap-1">
        {#if title}
            <div class="text-sm font-semibold">{title}</div>
        {/if}
        {#if description}
            <div class="text-sm opacity-90">{description}</div>
        {/if}
    </div>
    <Button
        variant="ghost"
        size="icon"
        class="h-8 w-8 rounded-md opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        on:click={onClose}
    >
        <X class="h-4 w-4" />
    </Button>
</div> 