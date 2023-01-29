<script lang="ts">
    export let text = "";
    export let event: () => void = () => {};
    export let color = "red";
</script>

<button
    class:bg-secondary={color === "red"}
    class:hover:bg-secondary-700={color === "red"}
    class:bg-primary-500={color === "blue"}
    class:hover:bg-primary-700={color === "blue"}
    class="cursor-pointer shadow-md px-4 text-lg py-2 rounded-md text-white "
    on:click={event}
>
    <slot name="icon" />
    {#if $$slots.icon}
        <span class="ml-3">{text}</span>
    {:else}
        <span>{text}</span>
    {/if}
</button>
