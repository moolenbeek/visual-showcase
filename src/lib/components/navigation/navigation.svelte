<script lang="ts">
    import { page } from '$app/stores';
</script>

<nav class="flex justify-between items-center p-4 bg-primary text-primary-foreground">
    {#if $page.data.user}
    <p>{$page.data.user?.username}</p>
    {/if}
    {#if !$page.data.user}
        <a href="/login">Login</a>
    {/if}
</nav>