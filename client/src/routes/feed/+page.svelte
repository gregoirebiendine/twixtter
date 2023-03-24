<script lang="ts">
    import axios, { type AxiosError, type AxiosResponse } from "axios";
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';
    
    import { clickOutside } from "../../lib/Events/ClickOutside";
    import type TwixContent from "../../lib/Interfaces/TwixContent";
    import TwixPost from "../../components/TwixPost.svelte";

    let searchBar: HTMLDivElement;

    const twixs: Array<TwixContent> = [
        {
            username: 'lafranceauxfrancais',
            twixname: 'Eric le GRAND Z',
            textContent: "Les français en on plein le cul des arbres.<br>Nous DEVONS réimmigrer tout ces arbres d'où ils viennent.",
            mediaContent: null,
            commentNumber: 800,
            retwixNumber: 15800,
            likeNumber: 160000
        },
        {
            username: 'melio62',
            twixname: 'Melio',
            textContent: "HIN.",
            mediaContent: "default_pp_bak.jpg",
            commentNumber: 800,
            retwixNumber: 15800,
            likeNumber: 160000
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

    onMount(() => {
        axios.post("http://localhost:8080/api/auth/islogin", {}, {withCredentials: true}).then((res: AxiosResponse) => {
            if (!res.data.user)
                goto('/');
        }).catch((err: AxiosError) => {
            console.log(err.message);
        });
    });
</script>

<section class="w-screen h-screen flex justify-center">
    <div class="h-full w-[40rem] border-x-[1px] border-gray-100 flex flex-col justify-start">
        <!-- Search Bar -->
        <div class="rounded-full bg-gray-100 flex flex-row items-center mx-8 mt-1 border border-gray-100" bind:this={searchBar}>
            <div class="px-6">
                <img class="w-[16px]" src="./search-icon.png" alt="search icon" />
            </div>
            <div class="w-full h-full">
                <input id="searchbar" class="w-full h-12 bg-transparent outline-none rounded-full font-sans text-base" type="text" placeholder="Recherche Twixtter" autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="search" use:clickOutside={unfocusSearchBar} on:click={focusSearchBar}>
            </div>
        </div>

        <!-- Content -->
        <div class="flex flex-col mt-16">
            <hr class="border-none bg-gray-100 w-full h-[1px]">
            {#each twixs as twixcontent}
                <TwixPost content={twixcontent}/>
                <hr class="border-none bg-gray-100 w-full h-[1px]">
            {/each}
        </div>
    </div>

    <!-- <button on:click={logout}>LOGOUT</button> -->
</section>

<style>
    input {
        margin: initial;
        padding: revert;
    }
</style>