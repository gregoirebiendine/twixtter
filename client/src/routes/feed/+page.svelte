<script lang="ts">
    import axios from "axios";
    import { goto } from '$app/navigation';
    
    import type TwixData from "$lib/Interfaces/TwixData";
    import TwixPost from "$lib/Components/TwixPost.svelte";
    import PageLayout from "$lib/Components/PageLayout.svelte";
    import SearchBar from "$lib/Components/SearchBar.svelte";

    /** @type {import('./$types').PageServerData} */
    export let data: TwixData;

    function logout() {
        axios.post("http://localhost:8080/api/auth/logout", {}, {withCredentials: true}).then(() => {
            goto("/");
        }).catch((err) => {
            alert(err);
        });
    };
</script>

<svelte:head>
	<title>Twixtter - Feed</title>
</svelte:head>

<PageLayout>
    <SearchBar />

    <!-- Content -->
    <div class="flex flex-col mt-10">
        <hr class="border-none bg-gray-200 w-full h-[1px]">
        <!-- {#each twixs as twixcontent}
            <TwixPost content={twixcontent}/>
            <hr class="border-none bg-gray-100 w-full h-[1px]">
            {/each} -->
        <TwixPost content={data}/>
        <hr class="border-none bg-gray-200 w-full h-[1px]">
    </div>
    <button on:click={logout}>LOGOUT</button>
</PageLayout>