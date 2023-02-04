<script lang="ts">
    export let text = "";
    export let event: () => void = () => {};
    export let color = "red";
    export let active = false;

    let active_class = "";

    $: active_class = active ? "ring-2" : "";
    $: {
        if (color === "red") {
            active_class += " text-secondary ring-red-300";
        }
        if (color === "blue") {
            active_class += " text-primary-500 ring-blue-300";
        }
    }
</script>

<button
    class="{active_class} bg-white hover:drop-shadow-xl cursor-pointer drop-shadow-md border px-4 text-lg py-2 rounded-md"
    on:click={event}
>
    <slot name="icon" />
    <span>{text}</span>
</button>
