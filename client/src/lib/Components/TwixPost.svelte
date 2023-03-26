<script lang="ts">
    import type TwixData from "$lib/Interfaces/TwixData";

    export let content: TwixData;

    function getTimeElapsedSincePost() {
        return Math.trunc((Date.now() - new Date(content.postDate).getTime()) / 1000); 
    }
</script>

<article class="w-full flex flex-col items-center py-6" data-post-id={content.id}>
    <div class="w-full flex flex-row px-6">
        <div class="mr-4">
            <img class="w-[60px] rounded-full" src="/default_profile_photo.png" alt={`${content.authorUsername} photo`}>
        </div>
        <div>
            <div>
                <p class="font-montserrat">
                    <a href={`/user/${content.authorUsername}`} class="text-base text-twixtter-gray font-bold mr-1">{content.authorTwixname}</a>
                    <span class="text-sm text-twixtter-gray-light">@{content.authorUsername}</span>
                    <span class="text-xs text-twixtter-gray-light">- {getTimeElapsedSincePost()}s</span>
                </p>
            </div>
            <div>
                <p class="font-montserrat text-base text-twixtter-gray">
                    {@html content.textContent}
                </p>
                {#if content.mediaContent}
                    <img class="w-full rounded-2xl mt-2" src={content.mediaContent} alt="media">
                {/if}
            </div>
            <div class="mt-2 flex flex-row">
                <button class="btn-twix-infos">
                    <img class="w-[16px]" src="/comment-icon.png" alt="Comment icon">
                    <p>
                        {content.commentNumber}
                    </p>
                </button>
                <button class="mx-6 btn-twix-infos">
                    <img class="w-[16px]" src="/retwix-icon.png" alt="Comment icon">
                    <p>
                        {content.retwixNumber}
                    </p>
                </button>
                <button class="btn-twix-infos">
                    <img class="w-[16px]" src="/like-icon.png" alt="Comment icon">
                    <p>
                        {content.likeNumber}
                    </p>
                </button>
            </div>
        </div>
    </div>
    <!-- <div class="">
        <button>
            <p class="font-sans text-base text-twixtter-blue text-center">Afficher la discussion</p>
        </button>
    </div> -->
</article>

<style lang="postcss">
    a:hover {
        text-decoration: underline;
    }

    .btn-twix-infos {
        @apply p-2 flex justify-center items-center transition-all duration-200 rounded-full;
    }
    
    .btn-twix-infos:hover {
        @apply bg-gray-100;
    }

    .btn-twix-infos p {
        @apply ml-1 font-montserrat text-xs text-twixtter-gray-light;
    }
</style>