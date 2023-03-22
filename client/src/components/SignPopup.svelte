<script lang="ts">
    import { goto } from '$app/navigation';
    import axios from 'axios';
    
    export let signid: string;
    let formEl: HTMLFormElement;
    let submitDisabled: boolean = true;

    interface TwixtterFormData extends Object {
        username: string,
        email: string,
        password: string,
    }

    const formData: TwixtterFormData = {
        username: '',
        email: '',
        password: '',
    };

    $: {
        if (Object.values(formData).every((el: string, idx: number) => {return (signid == 'signin' && idx == 1) ? true : el.length != 0}))
            submitDisabled = false;
        else
            submitDisabled = true;
    };

    const actionSignIn = (e: Event) => {
        e.preventDefault();
        const data = new FormData(formEl);

        axios.post("http://localhost:8080/api/auth/login", {username: data.get('username'), password: data.get('password')}, {withCredentials: true}).then(() => {
            goto('/feed');
        }).catch(() => {
            alert("An error has occured");
        });
    };

    const actionSignUp = (e: Event) => {
        e.preventDefault();
        const data = new FormData(formEl);

        axios.post("http://localhost:8080/api/auth/signup", {email: data.get('email'), username: data.get('username'), twixname: data.get('username'), password: data.get('password')}, {withCredentials: true}).then(() => {
            goto('/feed');
        }).catch(() => {
            alert("An error has occured");
        });
    };
</script>

<section class="test w-full h-full fixed top-0 left-0 z-50 flex justify-center items-center transition-all duration-200 bg-gray-800 bg-opacity-70" data-aos="fade-in" data-aos-duration=500>
    <div class="bg-white rounded-xl text-twixtter-gray p-20 relative" data-aos="fade-up" data-aos-duration=1000>

        <button on:click class="absolute top-4 right-4 hover-btn p-2 hover:bg-gray-100 hover:rounded-full">
            <img class="w-[16px] select-none" src="/close-btn.png" alt="Close btn">
        </button>
        <form action="/" method="POST" class="flex flex-col justify-center" bind:this={formEl}>
            <img class="w-[32px] m-auto" src="/favicon.png" alt="Twixtter icon">

            {#if signid == 'signin'}
                <p class="font-montserrat font-bold text-3xl my-6 uppercase">
                    Sign In to <span class="text-twixtter-blue">Twixtter</span>
                </p>
                <input type="text" name='username' placeholder='Username' required bind:value={formData.username}/>
                <input type="password" name="password" placeholder='Password' required bind:value={formData.password}/>
                <button class="submit-btn hover:bg-[#1887d1]" on:click={actionSignIn} disabled={submitDisabled}>
                    Sign In
                </button>
            {:else if signid == 'signup'}
                <p class="font-montserrat font-bold text-3xl my-6 uppercase">
                    Sign Up to <span class="text-twixtter-blue">Twixtter</span>
                </p>
                <input type="text" name='username' placeholder='Username' required bind:value={formData.username}/>
                <input type="text" name='email' placeholder='Email' required bind:value={formData.email}/>
                <input type="password" name="password" placeholder='Password' required bind:value={formData.password}/>
                <button class="submit-btn hover:bg-[#1887d1]" on:click={actionSignUp} disabled={submitDisabled}>
                    Sign Up
                </button>
                    
            {/if}
        </form>
    </div>
</section>

<style lang="postcss">
    .submit-btn {
        @apply bg-twixtter-blue rounded-full font-montserrat text-xl font-bold text-white uppercase p-2 mt-12 transition-all duration-300;
    }

    .submit-btn:disabled {
        @apply bg-gray-400 rounded-full font-montserrat text-xl font-bold text-white uppercase p-2 mt-12;
    }

    input {
        @apply font-montserrat text-lg text-twixtter-gray tracking-wide mt-6 outline-none border-b-2;

        border-image-slice: 1;
        border-image-source: linear-gradient(90deg, rgb(29, 155, 240) 0%, rgba(170,115,210,0.2) 100%);
    }
</style>