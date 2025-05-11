<script lang="ts">
    import "../app.css";
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import Navigation from "$lib/components/navigation/navigation.svelte";
    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<Navigation />
<div class="min-h-screen p-4">
    {@render children()}
</div>
