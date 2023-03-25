<script lang="ts">
    import type TwixtterPorfileData from "$lib/Interfaces/TwixtterUserData";
    import TwixPost from "../../../components/TwixPost.svelte";

    /** @type {import('./$types').PageServerData} */
    export let data: TwixtterPorfileData;
</script>

<svelte:head>
	<title>Twixtter - {data.user.twixname} (@{data.user.username})</title>
</svelte:head>

<section class="w-screen h-screen flex justify-center">
    <div class="h-full w-[40rem] border-x-[1px] border-gray-100 flex flex-col justify-start">
        <div class="flex flex-row items-center py-2 px-4">
            <div class="">
                <a href="/feed" class="block p-2 h-fit rounded-full cursor-pointer hover:bg-gray-100">
                    <svg viewBox="0 0 24 24" class="w-[20px] h-[20px] fill-current select-none text-twixtter-gray" aria-hidden="true">
                        <g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g>
                    </svg>
                </a>
            </div>
            <div class="ml-4">
                <p class="font-montserrat font-bold text-xl text-twixtter-gray">{data.user.twixname}</p>
                <p class="font-montserrat text-xs text-twixtter-gray-light">{data.twixs.length} Twixs</p>
            </div>
        </div>
        <div class="w-full h-56 relative header border-b-[4px] border-twixtter-gray">
            <div class="w-32 absolute bottom-0 left-4 translate-y-1/2 rounded-full bg-twixtter-gray p-1">
                <img class="w-full rounded-full" src="/default_profile_photo.png" alt={`${data.user.username} photo`}>
            </div>
        </div>
        <div class="flex justify-end p-4">
            <button class="bg-twixtter-blue font-montserrat text-lg text-white font-bold px-4 py-2 rounded-full transition-all duration-300 hover:bg-twixtter-blue-dark">
                Follow
            </button>
        </div>
        <div class="mt-6 p-4">
            <div class="">
                <p class="font-montserrat leading-[1.2]">
                    <span class="text-xl text-twixtter-gray font-bold leading-none">{data.user.twixname}</span><br>
                    <span class="text-xs text-twixtter-gray-light leading-none">@{data.user.username}</span>
                </p>
                <p class="font-sans text-twixtter-gray text-base leading-none mt-3">
                    {#if data.user.profileBio}
                        {data.user.profileBio}
                    {:else}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    {/if}
                </p>
            </div>
        </div>
        
        <!-- Content -->
        <div class="flex flex-col mt-6">
            <hr class="border-none bg-gray-100 w-full h-[1px]">
            {#if data.twixs.length == 0}
                <h1 class="m-auto text-center mt-6">This user hasn't posted yet.</h1>
            {:else}
                {#each data.twixs as twixcontent}
                    <TwixPost content={twixcontent}/>
                    <hr class="border-none bg-gray-100 w-full h-[1px]">
                {/each}
            {/if}
        </div>
    </div>
</section>

<style lang="scss">
    .header {
        background: url("/default_profile_header.jpg") no-repeat center center;
    }
</style>