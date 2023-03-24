<script lang="ts">
    import type TwixtterUserData from "$lib/Interfaces/TwixtterUserData";

    /** @type {import('./$types').PageData} */
    export let data: TwixtterUserData;
</script>



<section class="w-screen h-screen flex justify-center">
    <div class="h-full w-[40rem] border-x-[1px] border-gray-100 flex flex-col justify-start">

        {data.username}

        <!-- {#if userData}
            {userData?.username}
        {/if} -->
        
        <!-- Content -->
        <!-- <div class="flex flex-col mt-16">
            <hr class="border-none bg-gray-100 w-full h-[1px]">
            {#each twixs as twixcontent}
                <TwixPost content={twixcontent}/>
                <hr class="border-none bg-gray-100 w-full h-[1px]">
            {/each}
        </div> -->
    </div>
</section>