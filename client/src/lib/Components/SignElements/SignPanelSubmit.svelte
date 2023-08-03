<script lang="ts">
    export let label: string;
    export let disabled: boolean;
</script>

<button on:click class="bg-twixtter-purple1 rounded-full font-sans text-xl font-medium text-white uppercase p-2 mt-12 transition-all duration-300 hover:bg-opacity-90" {disabled}>
    {label}
</button>

<style lang="postcss">
    button:disabled {
        @apply bg-gray-400;
    }
</style>