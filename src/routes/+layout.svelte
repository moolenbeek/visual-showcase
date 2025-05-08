<script lang="ts">
    import "../app.css";
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import Navigation from "$lib/components/navigation/navigation.svelte";
    let { data, children }: { data: LayoutData, children: Snippet } = $props();
    let { user } = data;
</script>

<div class="min-h-screen">
    <Navigation user={user} />
    {@render children()}
</div>
