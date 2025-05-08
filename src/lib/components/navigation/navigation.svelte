<script lang="ts">
    let { user } = $props();
</script>

<nav>
    <!-- fix reload to show user -->
    <p>{user?.username}</p>
    {#if !user}
        <a href="/login">Login</a>
    {/if}
</nav>