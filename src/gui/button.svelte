<script lang="ts">
    export let text = "";
    export let event: () => void = () => {};
    export let color = "red";
    export let active = false;
    let active_class="";

    $: active_class = active ? "ring-4" : "";
    $: {
        if (color === "red") {
            active_class += " bg-secondary hover:bg-secondary-700 ring-red-300";
        }
        if (color === "blue") {
            active_class +=
                " bg-primary-500 hover:bg-primary-700 ring-blue-300";
        }
    }
</script>

<button
    class="{active_class} cursor-pointer shadow-md px-4 text-lg py-2 rounded-md text-white "
    on:click={event}
>
    <slot name="icon" />
    <span>{text}</span>
</button>
