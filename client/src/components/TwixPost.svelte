<script lang="ts">
    import type TwixContent from "../lib/Interfaces/TwixContent";

    export let content: TwixContent;

</script>

<article class="w-full flex flex-col items-center py-6">
    <div class="w-full flex flex-row px-6">
        <div class="mr-4">
            <img class="w-[60px] rounded-full" src="/default_pp.png" alt="Twixtter icon">
        </div>
        <div>
            <div>
                <p class="font-montserrat text-base">
                    <a href="/" class="text-twixtter-gray font-bold mr-1">{content.twixname}</a>
                    <span class="text-twixtter-gray-shaded">@{content.username}</span>
                    <span class="text-twixtter-gray-shaded text-xs">- 7h</span>
                </p>
            </div>
            <div>
                <p class="font-montserrat text-base text-twixtter-gray">
                    {@html content.textContent}
                </p>
                {#if content.mediaContent}
                    <img class="w-full rounded-lg mt-2" src={content.mediaContent} alt="media">
                {/if}
            </div>
            <div class="mt-2 flex flex-row">
                <div class="number-section">
                    <img class="w-[16px] inline-block" src="/comment-icon.png" alt="Comment icon">
                    <p class="font-montserrat text-xs text-twixtter-gray-shaded inline-block">
                        {content.commentNumber}
                    </p>
                </div>
                <div class="mx-6 number-section ">
                    <img class="w-[16px] inline-block" src="/retwix-icon.png" alt="Comment icon">
                    <p class="font-montserrat text-xs text-twixtter-gray-shaded inline-block">
                        {content.retwixNumber}
                    </p>
                </div>
                <div class="number-section ">
                    <img class="w-[16px] inline-block" src="/like-icon.png" alt="Comment icon">
                    <p class="font-montserrat text-xs text-twixtter-gray-shaded inline-block">
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

<style lang="postcss">
    a:hover {
        text-decoration: underline;
    }

    .number-section {
        @apply rounded-2xl py-1 px-2 hover:bg-gray-100 hover:cursor-pointer;
    }
</style>