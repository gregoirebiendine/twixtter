<script lang="ts">
    export let full: boolean = false;
</script>

<button on:click class="font-montserrat text-lg text-white tracking-wider font-bold uppercase py-2 px-4 transition-opacity duration-300 hover:opacity-75 {full ? 'rounded-md btn-bg' : ''}">
    <slot />
</button>

<style lang="postcss">
    .btn-bg {
        background: linear-gradient(90deg, #4c64a7 0%, #693b9d 100%);
    }
</style>