<script lang="ts">
    import axios from "axios";
    import { goto } from '$app/navigation';
    
    import { clickOutside } from "$lib/Events/ClickOutside";
    import type TwixData from "$lib/Interfaces/TwixData";
    import TwixPost from "$lib/Components/TwixPost.svelte";
    import PageLayout from "$lib/Components/PageLayout.svelte";
    import type UserData from "$lib/Interfaces/UserData";

    /** @type {import('./$types').PageServerData} */
    export let data: UserData;

    let searchBar: HTMLDivElement;

    const twixs: Array<TwixData> = [
        {
            id: '1',
            authorId: '1',
            authorUsername: 'lafranceauxfrancais',
            authorTwixname: 'Eric le GRAND Z',
            textContent: "Les français en on plein le cul des arbres.<br>Nous DEVONS réimmigrer tout ces arbres d'où ils viennent.",
            mediaContent: null,
            commentNumber: 800,
            retwixNumber: 15800,
            likeNumber: 160000,
            postDate: new Date()
        },
        {
            id: '2',
            authorId: '1',
            authorUsername: 'lafranceauxfrancais',
            authorTwixname: 'Eric le GRAND Z',
            textContent: "HIN",
            mediaContent: "media-content-test.jpg",
            commentNumber: 800,
            retwixNumber: 15800,
            likeNumber: 160000,
            postDate: new Date()
        }
    ];

    function logout() {
        axios.post("http://localhost:8080/api/auth/logout", {}, {withCredentials: true}).then(() => {
            goto("/");
        }).catch((err) => {
            alert(err);
        });
    };

    function unfocusSearchBar() {
        searchBar.classList.replace('border-twixtter-blue', 'border-gray-100');
    }

    function focusSearchBar() {
        searchBar.classList.replace('border-gray-100', 'border-twixtter-blue');
    }
</script>

<PageLayout>
    <!-- Search Bar -->
    <div class="rounded-full bg-gray-100 flex flex-row items-center mx-8 mt-2 border border-gray-100" bind:this={searchBar}>
        <div class="px-6">
            <img class="w-[16px]" src="./search-icon.png" alt="search icon" />
        </div>
        <div class="w-full h-full">
            <input id="searchbar" class="w-full h-12 bg-transparent outline-none rounded-full font-sans text-base" type="text" placeholder="Recherche Twixtter" autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="search" use:clickOutside={unfocusSearchBar} on:click={focusSearchBar}>
        </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col mt-16">
        {data.id}
        <hr class="border-none bg-gray-100 w-full h-[1px]">
        {#each twixs as twixcontent}
            <TwixPost content={twixcontent}/>
            <hr class="border-none bg-gray-100 w-full h-[1px]">
        {/each}
    </div>
    <button on:click={logout}>LOGOUT</button>
</PageLayout>

<style>
    input {
        margin: initial;
        padding: revert;
    }
</style>