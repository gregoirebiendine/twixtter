<script lang="ts">
    import PopupLayout from "./PopupLayout.svelte";

    let previewPPEl: HTMLImageElement;

    function showPreview(e: Event) {
        const el: HTMLInputElement = e.target as HTMLInputElement;
        if (el.files && el.files.length > 0) {
            const src = URL.createObjectURL(el.files[0]);
            previewPPEl.src = src;
            console.log(src);
            previewPPEl.nextElementSibling?.classList.add('hidden');
        }
    }
</script>

<PopupLayout>
    <div class="bg-white rounded-xl text-twixtter-gray py-6 px-20 relative" data-aos="fade-up" data-aos-duration=1000>
        <button on:click class="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100">
            <img class="w-[16px] select-none" src="/close-btn.png" alt="Close btn">
        </button>
        <form class="w-[300px] flex flex-col justify-center" enctype="multipart/form-data">
            <img class="w-[32px] m-auto" src="/favicon.png" alt="Twixtter icon">

            <p class="font-sans font-bold text-2xl mt-10">
                Pick a <span class="text-twixtter-blue">profile photo</span>
            </p>
            <p class="font-sans text-base text-twixtter-gray-light opacity-60">
                <i>Take your best selfie !</i>
            </p>
            <div class="w-40 rounded-full bg-twixtter-gray p-[2px] my-20 mx-auto relative">
                <img class="w-full rounded-full" src="/default_profile_photo.jpg" alt={`Default profile photo`} bind:this={previewPPEl}>
                <label for="upload-pp" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer p-2 bg-gray-200 hover:bg-gray-300">
                    <svg class="w-8" viewBox="0 0 24 24" aria-hidden="true">
                        <g><path d="M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z"></path></g>
                    </svg>
                </label>
                <input id="upload-pp" class="hidden" type="file" accept="image/*" name="profile-photo" on:change={showPreview}/>
            </div>
        </form>
        <button class="w-full rounded-full font-montserrat text-xl font-bold text-twixtter-gray border-2 bg-gray-100 border-gray-100 hover:border-twixtter-gray p-2 transition-all duration-300">
            Next
        </button>
    </div> 
</PopupLayout>