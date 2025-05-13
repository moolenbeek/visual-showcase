<script lang="ts">
  import CategoryManager from "$lib/components/categoryManager/categoryManager.svelte";
  import { ToastContainer } from "$lib/components/ui/toast";
  import * as Table from "$lib/components/ui/table";
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  let { data } = $props();
</script>

<ToastContainer />

<CategoryManager data={data} />

<Card class="mt-4">
    <CardContent>
        <Table.Table>
            <Table.TableHeader>
                <Table.TableRow>
                    <Table.TableHead>Gallery</Table.TableHead>
                </Table.TableRow>
            </Table.TableHeader>
        </Table.Table>
    </CardContent>
</Card>