<script lang="ts">
    export let bordered: boolean = false;
</script>

<button on:click class={`font-montserrat text-base uppercase p-2 mr-2 hover:scale-105 transition-all duration-200 ${bordered ? 'text-white font-bold border-2 border-twixtter-blue rounded-md bg-twixtter-blue' : ''}`}>
    <slot />
</button>