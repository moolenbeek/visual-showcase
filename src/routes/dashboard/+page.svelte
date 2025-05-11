<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import * as Table from '$lib/components/ui/table';
    let { data } = $props();
</script>

<Table.Table>
    <Table.TableHeader>
        <Table.TableRow>
            <Table.TableHead>ID</Table.TableHead>
            <Table.TableHead>Name</Table.TableHead>
        </Table.TableRow>
    </Table.TableHeader>
    <Table.TableBody>
        {#each data.categories as category}
            <Table.TableRow>
                <Table.TableCell>{category.id}</Table.TableCell>
                <Table.TableCell>{category.name}</Table.TableCell>
            </Table.TableRow>
        {/each}
    </Table.TableBody>
</Table.Table>
