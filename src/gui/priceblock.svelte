<script lang="ts">
    import { faBan, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
    import { Icon } from "svelte-awesome";
    import Button from "./button.svelte";

    export let price = "";
    export let subprice = "";
    export let baseline = "";
    export let color = "";
    export let cta = "";
    export let url = "";
    export let args: Array<{ icon: string; text: string }> = [];
</script>

<!-- Price block - sans synchro-->
<div class="w-1/4 rounded-md border-8 min-h-[510px]">
    <div
        class:bg-primary-500={color === "blue"}
        class:bg-secondary={color === "red"}
        class="text-white py-4 h-32"
    >
        <h2 class="text-center text-2xl font-light">{baseline}</h2>
        {#if subprice}
            <div class="flex items-center justify-center mt-4 font-semibold">
                <h3 class="text-5xl">{price}</h3>
                <h4 class="text-2xl ml-2">{subprice}</h4>
            </div>
        {:else}
            <h3 class="text-center text-5xl mt-4 font-semibold">{price}</h3>
        {/if}
    </div>

    <table class="w-5/6 m-auto my-4">
        {#each args as { icon, text }}
            <tr class="border-b last-of-type:border-none">
                <td class="w-8">
                    {#if icon === "check"}
                        <Icon data={faCheckCircle} class="text-mygreen mr-2" />
                    {:else}
                        <Icon data={faBan} class="text-secondary mr-2" />
                    {/if}
                </td>
                <td class="py-2">
                    <p>{@html text}</p>
                </td>
            </tr>
        {/each}
    </table>
    {#if cta}
        <div class="text-center mb-4">
            <a href={url} target="_blank" rel="noreferrer">
                <Button text={cta} {color} />
            </a>
        </div>
    {/if}
</div>
