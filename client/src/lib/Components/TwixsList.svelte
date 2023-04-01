<script lang="ts">
    import type TwixData from "$lib/Interfaces/TwixData";
    import TwixPost from "./TwixPost.svelte";

    export let list: Array<TwixData>;
</script>

<div class="flex flex-col">
    {#each list as twix}
        <TwixPost content={twix}/>
    {/each}
</div>