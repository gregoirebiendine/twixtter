<script lang="ts">
    import { page } from '$app/stores';
    import type TwixtterProfileData from "$lib/Interfaces/TwixtterProfileData";
    import TwixPost from "$lib/Components/TwixPost.svelte";
    import PageLayout from "$lib/Components/PageLayout.svelte";

    /** @type {import('./$types').PageServerData} */
    export let data: TwixtterProfileData;

    let followings = JSON.parse(data.user.followings);
    let followers = JSON.parse(data.user.followers);
</script>

<svelte:head>
	<title>Twixtter - {data.user.twixname} (@{data.user.username})</title>
</svelte:head>

<PageLayout>
    <div class="flex flex-col border-b-[1px] border-gray-200 pb-2">
        <div class="flex flex-row items-center py-3 px-4">
            <div class="">
                <a href="/feed" class="block p-2 h-fit rounded-full cursor-pointer hover:bg-gray-100">
                    <svg viewBox="0 0 24 24" class="w-[20px] h-[20px] fill-current select-none text-twixtter-gray" aria-hidden="true">
                        <g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g>
                    </svg>
                </a>
            </div>
            <div class="ml-4">
                <p class="font-montserrat font-bold text-xl text-twixtter-gray leading-none">{data.user.twixname}</p>
                <p class="font-montserrat text-xs text-twixtter-gray-light">{data.twixs.length} Twix{data.twixs.length > 1 ? 's' : ''}</p>
            </div>
        </div>
        <div class="w-full h-56 relative bg-gray-400" style={data.user.profileHeader ? `background: url('${data.user.profileHeader}') no-repeat center center` : ''}>
            <div class="w-32 absolute bottom-0 left-4 translate-y-1/2 rounded-full bg-twixtter-gray p-[2px]">
                <img class="w-full rounded-full" src={data.user.profilePhoto} alt={`${data.user.username} photo`}>
            </div>
        </div>
        <div class="flex justify-end p-4">
            {#if data.connectedUser && $page.params.username == data.connectedUser.username}
                <button class="bg-gray-100 font-montserrat text-lg text-twixtter-gray font-bold px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-200">
                    Edit Profile
                </button>
            {:else}
                <button class="bg-twixtter-blue font-montserrat text-lg text-white font-bold px-4 py-2 rounded-full transition-all duration-300 hover:bg-twixtter-blue-dark">
                    Follow
                </button>
            {/if}
        </div>
        <div class="p-4">
            <div class="">
                <p class="font-montserrat leading-[1.2]">
                    <span class="text-xl text-twixtter-gray font-bold leading-none">{data.user.twixname}</span><br>
                    <span class="text-sm text-twixtter-gray-light leading-none">@{data.user.username}</span>
                </p>
                <p class="font-sans text-twixtter-gray text-base leading-none mt-3">
                    {#if data.user.profileBio}
                        {data.user.profileBio}
                    {:else}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    {/if}
                </p>
    
                <!-- {#if data.user.profileLink}
                {/if} -->
                <div class="mt-4">
                    <svg class="w-[18px] inline-block" viewBox="0 0 24 24" aria-hidden="true">
                        <g><path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path></g>
                    </svg>
                    <a href={data.user.profileLink ? data.user.profileLink : '/'} class="font-sans text-base text-[#0000EE] underline inline-block">
                        {data.user.profileLink ? data.user.profileLink : 'https://twitter.com/terracid'}
                    </a>
                </div>
    
                <!-- {#if data.user.profileLocation}
                {/if} -->
                <div class="mt-1">
                    <svg class="w-[18px] inline-block" viewBox="0 0 24 24" aria-hidden="true">
                        <g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path></g>
                    </svg>
                    <p class="font-sans text-base inline-block">
                        {data.user.profileLocation ? data.user.profileLocation : 'France'}
                    </p>
                </div>
    
                <div class="mt-4">
                    <p class="font-montserrat leading-none inline-block mr-4">
                        <span class="text-base text-twixtter-gray font-bold leading-none">{followings.length}</span>
                        <span class="text-sm text-twixtter-gray-light leading-none">abonnements</span>
                    </p>
                    <p class="font-montserrat leading-none inline-block">
                        <span class="text-base text-twixtter-gray font-bold leading-none">{followers.length}</span>
                        <span class="text-sm text-twixtter-gray-light leading-none">abonnés</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col">
        {#if data.twixs.length == 0}
            <h1 class="m-auto text-center mt-6 font-montserrat text-lg">This user hasn't posted yet.</h1>
        {:else}
            {#each data.twixs as twixcontent}
                <TwixPost content={twixcontent}/>
            {/each}
        {/if}
    </div>
</PageLayout>