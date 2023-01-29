<script lang="ts">
    export let text = "";
    export let event: () => void = () => {};
</script>

<button
    class="cursor-pointer shadow-md bg-secondary px-4 text-base py-2 rounded-md text-white hover:bg-secondary-700"
    on:click={event}
>
    <slot name="icon" />
    {#if $$slots.icon}
        <span class="ml-3">{text}</span>
    {:else}
        <span>{text}</span>
    {/if}
</button>
