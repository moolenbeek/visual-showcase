<script lang="ts">
    import "../app.css";
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    
    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<div class="min-h-screen bg-primary text-primary-foreground">
    {@render children()}
</div>
