<script lang="ts">
    import type TwixContent from "../lib/Interfaces/TwixContent";

    export let content: TwixContent;

    function getTimeElapsedSincePost() {
        return Math.trunc((Date.now() - content.postDate.getTime()) / 1000)
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
                <div class="rounded-2xl py-1 px-2 cursor-pointer hover:bg-gray-100">
                    <img class="w-[16px] inline-block" src="/comment-icon.png" alt="Comment icon">
                    <p class="font-montserrat text-xs text-twixtter-gray-light inline-block">
                        {content.commentNumber}
                    </p>
                </div>
                <div class="mx-6 rounded-2xl py-1 px-2 cursor-pointer hover:bg-gray-100">
                    <img class="w-[16px] inline-block" src="/retwix-icon.png" alt="Comment icon">
                    <p class="font-montserrat text-xs text-twixtter-gray-light inline-block">
                        {content.retwixNumber}
                    </p>
                </div>
                <div class="rounded-2xl py-1 px-2 cursor-pointer hover:bg-gray-100">
                    <img class="w-[16px] inline-block" src="/like-icon.png" alt="Comment icon">
                    <p class="font-montserrat text-xs text-twixtter-gray-light inline-block">
                        {content.likeNumber}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="">
        <button>
            <p class="font-sans text-base text-twixtter-blue text-center">Afficher la discussion</p>
        </button>
    </div> -->
</article>

<style lang="scss">
    a:hover {
        text-decoration: underline;
    }
</style>