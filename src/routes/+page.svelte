<script lang='ts'>
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';
	import { Button } from '$lib/components/ui/button';

	let { data }: { data: PageServerData } = $props();
</script>

<h1>Hi, {data.user.username}!</h1>
<form method='post' action='?/logout' use:enhance>
	<Button type="submit">Sign out</Button>
</form>
