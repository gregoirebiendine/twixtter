<script lang="ts">
    import { page } from '$app/stores';
    import SearchBar from './SearchBar.svelte';
    import type UserData from '$lib/Interfaces/UserData';

    export let user: UserData | null;
</script>

<section class="w-full h-full min-h-screen flex flex-row justify-center">
    <div class="w-full h-full min-h-screen flex justify-end relative">
        <div class="h-full flex flex-col justify-between fixed top-0">
            <div class="flex flex-col mt-2 mx-8">
                <a class="w-[32px] mx-4 my-2" href="/feed">
                    <img class="w-full" src="/favicon.png" alt="Twixtter icon">
                </a>
                <button class="px-4 py-2 my-3 w-fit hover-gray">
                    <svg class="w-[26px] text-twixtter-gray inline-block align-middle mr-4" viewBox="0 0 24 24" aria-hidden="true">
                        <g><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path></g>
                    </svg>
                    <p class="font-montserrat font-medium text-xl text-twixtter-gray inline-block align-middle">
                        Explore
                    </p>
                </button>
                <button class="px-4 py-2 w-fit hover-gray">
                    <svg class="w-[26px] text-twixtter-gray inline-block align-middle mr-4" viewBox="0 0 24 24" aria-hidden="true">
                        <g><path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path></g>
                    </svg>
                    <p class="font-montserrat font-medium text-xl text-twixtter-gray inline-block align-middle">
                        Settings
                    </p>
                </button>
            </div>
            {#if user}
                <p>mdr profile</p>
            {/if}
        </div>
    </div>
    <div class="w-[38rem] min-w-[38rem] h-full min-h-screen border-x-[1px] border-gray-200 flex flex-col justify-start">
        <slot></slot>
    </div>
    <div class="w-full h-full min-h-screen flex justify-start relative">
        <div class="w-fit flex flex-col mx-8 fixed top-0">
            {#if $page.route.id?.includes('/user/')}
                <SearchBar little={true} class="mb-4"/>
            {/if}
            <div class="min-w-[20rem] h-fit flex flex-col mt-2 py-4 bg-gray-100 rounded-xl">
                <p class="font-montserrat font-bold text-xl text-twixtter-gray inline-block align-middle px-4">
                    Global Trends
                </p>
                <a class="mt-4 px-4 py-2 hover:bg-gray-200" href='/'>
                    <p class="font-montserrat font-bold text-base text-twixtter-gray">
                        Polska
                    </p>
                    <p class="font-montserrat font-normal text-sm text-twixtter-gray-light">
                        13k Twixs
                    </p>
                </a>
                <a class="px-4 py-2 hover:bg-gray-200" href='/'>
                    <p class="font-montserrat font-bold text-base text-twixtter-gray">
                        Squeezie
                    </p>
                    <p class="font-montserrat font-normal text-sm text-twixtter-gray-light">
                        130k Twixs
                    </p>
                </a>
                <a class="px-4 py-2 hover:bg-gray-200" href='/'>
                    <p class="font-montserrat font-bold text-base text-twixtter-gray">
                        Reconquete
                    </p>
                    <p class="font-montserrat font-normal text-sm text-twixtter-gray-light">
                        1m Twixs
                    </p>
                </a>
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
    .hover-gray {
        @apply transition-all duration-200 rounded-full;
    }

    .hover-gray:hover {
        @apply bg-gray-100;
    }
</style>