<script lang="ts">
    import { clickOutside } from "$lib/Events/ClickOutside";

    export let little: boolean = false;
    let searchBar: HTMLDivElement;

    function unfocusSearchBar() {
        searchBar.classList.replace('border-twixtter-blue', 'border-gray-100');
    }

    function focusSearchBar() {
        searchBar.classList.replace('border-gray-100', 'border-twixtter-blue');
    }
</script>

<div id="searchbar" class={`rounded-full bg-gray-100 flex flex-row items-center mt-2 border border-gray-100 ${(!little) ? 'mx-8' : ''} ${$$props.class}`} bind:this={searchBar}>
    <div class="px-6">
        <img class="w-[16px]" src="/search-icon.png" alt="search icon" />
    </div>
    <div class="w-full h-full">
        <input id="searchbar" class="w-full h-12 bg-transparent outline-none rounded-full font-sans text-base" type="text" placeholder="Recherche Twixtter" autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="search" use:clickOutside={unfocusSearchBar} on:click={focusSearchBar}>
    </div>
</div>

<style>
    input {
        margin: initial;
        padding: revert;
    }
</style>