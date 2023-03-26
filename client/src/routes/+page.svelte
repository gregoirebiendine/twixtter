<script lang="ts">
    import SignButton from "$lib/Components/SignButton.svelte";
    import SignPopup from "$lib/Components/SignPopup.svelte";

    let isPopupToggled: boolean = false;
    let popupSignId: string;

    const togglePopup = (id: string) => {
        isPopupToggled = !isPopupToggled;
        popupSignId = id;
    };
</script>

{#if isPopupToggled}
    <SignPopup signid={popupSignId} on:click={() => togglePopup('')}></SignPopup>
{/if}

<section class="w-screen h-screen flex justify-center items-center">
    <div class="absolute top-0 right-0 p-4">
        <SignButton bordered={false} on:click={() => togglePopup('signin')}>
            Sign In
        </SignButton>
        <SignButton bordered={true} on:click={() => togglePopup('signup')}>
            Sign Up
        </SignButton>
    </div>
    <div class="flex flex-col" data-aos="fade-up" data-aos-duration=1000>
        <p class="leading-none text-center">
            <span class="flex flex-row items-center justify-center font-bebas-neue-exp font-extrabold text-9xl text-twixtter-blue">
                <img class="w-[100px] mr-4" src="/favicon.png" alt="Twixtter icon">
                Twixtter<br>
            </span>
            <span class="font-montserrat font-bold italic text-6xl text-twixtter-gray mt-2">
                Twitter but better
            </span>
        </p>
        <hr class="mt-1 bg-twixtter-gray w-full h-[3px] rounded-full">
    </div>
</section>