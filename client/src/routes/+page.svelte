<script lang="ts">
    import SignButton from "$lib/Components/SignElements/SignButtons.svelte";
    import SignPopup from "$lib/Components/Popups/SignPopup.svelte";
    import type { PanelID } from "$lib/Interfaces/PopupPanel";

    let isPopupToggled: boolean = false;
    let popupPanelID: PanelID;

    function togglePopup(id: PanelID) {
        isPopupToggled = !isPopupToggled;
        popupPanelID = id;
    };
</script>

{#if isPopupToggled}
    <SignPopup panelID={popupPanelID} on:click={() => togglePopup('none')} on:clickNoAccount={() => popupPanelID = 'signup'}></SignPopup>
{/if}

<section class="w-full h-screen flex justify-center items-center bg-home bg-center bg-no-repeat bg-cover select-none">
    <div class="absolute top-0 right-0 flex flex-row gap-4 p-4">
        <SignButton full={false} on:click={() => togglePopup('signin')}>
            Sign In
        </SignButton>
        <SignButton full={true} on:click={() => togglePopup('signup')}>
            Sign Up
        </SignButton>
    </div>
    <div class="flex flex-col relative px-14 py-20" data-aos="fade-in" data-aos-duration="2000">
        <p class="leading-none text-center font-montserrat">
            <span class="flex flex-row items-center justify-center gap-8  font-bold text-9xl tracking-widest text-white">
                Twixtter
            </span>
            <span class="text-5xl tracking-wide text-twixtter-purple2 mt-4">
                Home of all greatest ideas
            </span>
        </p>
    </div>
</section>