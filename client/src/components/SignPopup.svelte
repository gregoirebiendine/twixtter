<script lang="ts">
    import { goto } from '$app/navigation';
    export let signid: string;

    const goToFeed = () => {
        goto('/feed');
    };
</script>

<section class="test w-full h-full fixed top-0 left-0 z-50 flex justify-center items-center transition-all duration-200 bg-gray-800 bg-opacity-70" data-aos="fade-in" data-aos-duration=500>
    <div class="bg-white rounded-xl text-twixtter-gray p-20 relative" data-aos="fade-up" data-aos-duration=1000>
        <button on:click class="absolute top-4 right-4 hover-btn">
            <img class="w-[16px] select-none" src="/close-btn.png" alt="Close btn">
        </button>
        <div class="flex flex-col justify-center">
            <img class="w-[32px] m-auto" src="/favicon.png" alt="Twixtter icon">

            {#if signid == 'signin'}
                <p class="font-montserrat font-bold text-3xl my-6 uppercase">
                    Sign In to <span class="text-twixtter-blue">Twixtter</span>
                </p>
                <input type="text" name='username' placeholder='Username' required />
                <input type="password" name="password" placeholder='Password' required />
                <button on:click={goToFeed} class="action-btn hover-btn">
                    Sign In
                </button>
            {:else if signid == 'signup'}
                <p class="font-montserrat font-bold text-3xl my-6 uppercase">
                    Sign Up to <span class="text-twixtter-blue">Twixtter</span>
                </p>
                <input type="text" name='username' placeholder='Username' required />
                <input type="text" name='email' placeholder='Email' required />
                <input type="password" name="password" placeholder='Password' required />
                <button on:click={goToFeed} class="action-btn hover-btn">
                    Sign Up
                </button>
            {/if}

            <button on:click class="bg-white border border-twixtter-gray rounded-full font-montserrat text-xl text-twixtter-gray uppercase p-2 mt-2 hover-btn">
                Cancel
            </button>
        </div>
    </div>
</section>

<style lang="postcss">
    .action-btn {
        @apply bg-twixtter-blue rounded-full font-montserrat text-xl font-bold text-white uppercase p-2 mt-12;
    }

    input {
        @apply font-montserrat text-lg text-twixtter-gray tracking-wide mt-6 outline-none border-b-2;

        border-image-slice: 1;
        border-image-source: linear-gradient(90deg, rgb(29, 155, 240) 0%, rgba(170,115,210,0.2) 100%);
    }
</style>