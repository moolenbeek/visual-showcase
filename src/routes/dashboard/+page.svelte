<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import * as Table from "$lib/components/ui/table";
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import { Trash, Plus } from "lucide-svelte";
  import { enhance } from "$app/forms";
  import { toast, ToastContainer } from "$lib/components/ui/toast";
  import { invalidateAll } from "$app/navigation";

  let { data } = $props();
  let newCategoryName = "";
</script>

<ToastContainer />

<Card>
  <CardContent>
    <Table.Table>
      <Table.TableHeader>
        <Table.TableRow>
          <Table.TableHead>Categories</Table.TableHead>
        </Table.TableRow>
      </Table.TableHeader>
      <Table.TableBody>
        {#each data.categories as category}
          <Table.TableRow>
            <Table.TableCell
              ><Input type="text" value={category.name} /></Table.TableCell
            >
            <Table.TableCell>
              <form
                method="POST"
                action="?/delete"
                use:enhance={() => {
                  return async ({ result }) => {
                    if (result.type === "success") {
                      await invalidateAll();
                    } else if (result.type === "error") {
                      toast({
                        title: "Error",
                        description: result.error?.message || "Failed to delete category",
                        variant: "destructive",
                      });
                    }
                  };
                }}
              >
                <input type="hidden" name="id" value={category.id} />
                <Button type="submit" size="icon">
                  <Trash size={16} />
                </Button>
              </form>
            </Table.TableCell>
          </Table.TableRow>
        {/each}
        <Table.TableRow>
            <Table.TableCell>
                <form
                method="POST"
                action="?/create"
                use:enhance={() => {
                  return async ({ result, formElement }) => {
                    if (result.type === "success") {
                      newCategoryName = "";
                      formElement.reset();
                      await invalidateAll();
                    } else if (result.type === "error") {
                      toast({
                        title: "Error",
                        description: result.error?.message || "Failed to create category",
                        variant: "destructive",
                      });
                    }
                  };
                }}
                class="flex gap-2"
              >
                <Input
                  type="text"
                  name="name"
                  bind:value={newCategoryName}
                  placeholder="New category name"
                  required
                />
                <Button type="submit" size="icon">
                  <Plus size={16} />
                </Button>
              </form>
            </Table.TableCell>
        </Table.TableRow>
      </Table.TableBody>
    </Table.Table>
  </CardContent>
</Card>

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