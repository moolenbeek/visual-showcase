<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import * as Table from '$lib/components/ui/table';
    import { Trash} from 'lucide-svelte';
    let { data } = $props();
</script>

<Table.Table>
    <Table.TableHeader>
        <Table.TableRow>
            <Table.TableHead>ID</Table.TableHead>
            <Table.TableHead>Name</Table.TableHead>
            <Table.TableHead>Actions</Table.TableHead>
        </Table.TableRow>
    </Table.TableHeader>
    <Table.TableBody>
        {#each data.categories as category}
            <Table.TableRow>
                <Table.TableCell>{category.id}</Table.TableCell>
                <Table.TableCell><Input type="text" value={category.name} /></Table.TableCell>
                <Table.TableCell><Trash size={16} /></Table.TableCell>
            </Table.TableRow>
        {/each}
    </Table.TableBody>
</Table.Table>
