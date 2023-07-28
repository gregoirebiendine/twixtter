<script lang="ts">
    import SignButton from "$lib/Components/SignButton.svelte";
    import SignPopup from "$lib/Components/Popups/SignPopup.svelte";

    let isPopupToggled: boolean = false;
    let popupSignId: string;

    function togglePopup(id: string) {
        isPopupToggled = !isPopupToggled;
        popupSignId = id;
    };
</script>

{#if isPopupToggled}
    <SignPopup signid={popupSignId} on:click={() => togglePopup('')}></SignPopup>
{/if}

<section class="w-screen h-screen flex justify-center items-center bg-home bg-center bg-no-repeat bg-cover">
    <div class="absolute top-0 right-0 flex flex-row gap-4 p-4">
        <SignButton bordered={false} on:click={() => togglePopup('signin')}>
            Sign In
        </SignButton>
        <SignButton bordered={true} on:click={() => togglePopup('signup')}>
            Sign Up
        </SignButton>
    </div>
    <div id="box-title" class="flex flex-col relative px-14 py-20" data-aos="fade-up" data-aos-duration=1000>
        <p class="leading-none text-center font-montserrat font-bold">
            <span class="flex flex-row items-center justify-center gap-8 text-9xl tracking-widest text-twixtter-purple2">
                <img class="w-[100px]" src="/twixtter_logo.png" alt="Twixtter icon">
                Twixtter<br>
            </span>
            <span class="italic text-6xl tracking-wide text-white mt-4">
                Twitter but better
            </span>
        </p>
    </div>
</section>

<style lang="postcss">
    #box-title::before {
        content: '';
        /* filter: blur(10px); */
        @apply -z-10 absolute top-0 left-0 w-full h-full rounded-3xl bg-black bg-opacity-40;
    }
</style>