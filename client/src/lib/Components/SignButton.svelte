<script lang="ts">
    export let bordered: boolean = false;
</script>

<button on:click class="font-montserrat text-base text-white tracking-wider font-bold uppercase py-2 px-3 transition-all duration-200 hover:scale-105 {bordered ? 'border-2 border-twixtter-purple2 rounded-md bg-twixtter-purple2' : ''}">
    <slot />
</button>