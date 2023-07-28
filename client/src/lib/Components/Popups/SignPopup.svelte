<script lang="ts">
    import { goto } from '$app/navigation';
    import Requester from '$lib/Classes/Requester';
    import PopupLayout from './PopupLayout.svelte';
    
    export let signid: string;
    let formEl: HTMLFormElement;
    let submitDisabled: boolean = true;

    interface TwixtterSignFormData extends Object {
        username: string,
        email: string,
        password: string,
    }

    const formData: TwixtterSignFormData = {
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

    function actionSignIn(e: Event) {
        e.preventDefault();
        const formData = new FormData(formEl);
        const dataObj = {username: formData.get('username'), password: formData.get('password')};

        Requester.post("http://localhost:8080/api/auth/login", dataObj).then(() => {
            goto('/feed');
        }).catch(() => {
            console.error("An error has occured");
        });
    };

    function actionSignUp(e: Event) {
        e.preventDefault();
        const formData = new FormData(formEl);
        const dataObj = {email: formData.get('email'), username: formData.get('username'), twixname: formData.get('username'), password: formData.get('password')};

        Requester.post("http://localhost:8080/api/auth/signup", dataObj).then(() => {
            actionSignIn(e);
        }).catch(() => {
            console.error("An error has occured");
        });
    };
</script>

<PopupLayout>
    <div class="bg-twixtter-bg rounded-xl text-white p-20 relative {signid === 'signin' ? 'pb-6' : ''}" data-aos="fade-up" data-aos-duration=1000>
        <button on:click class="absolute top-4 right-4 p-2 rounded-full hover:bg-twixtter-gray-light">
            <svg class="w-[20px] select-none" xmlns="http://www.w3.org/2000/svg" width="18.828" height="18.828" viewBox="0 0 18.828 18.828">
                <g id="Groupe_1" data-name="Groupe 1" transform="translate(-168.086 -159.086)">
                  <line y1="16" x2="16" transform="translate(169.5 160.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                  <line y1="16" x2="16" transform="translate(185.5 160.5) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                </g>
            </svg>
        </button>
        <form class="flex flex-col justify-center" bind:this={formEl}>
            <img class="w-[48px] m-auto" src="/favicon.png" alt="Twixtter icon">

            {#if signid == 'signin'}
                <p class="font-sans font-bold text-3xl my-6 uppercase tracking-wider">
                    Sign In to <span class="text-twixtter-purple1">Twixtter</span>
                </p>
                <input type="text" name='username' placeholder='Username' required maxlength=32 bind:value={formData.username}/>
                <input type="password" name="password" placeholder='Password' required maxlength=32 bind:value={formData.password}/>
                <button class="submit-btn bg-twixtter-purple1 rounded-full font-montserrat text-xl font-bold text-white uppercase p-2 mt-12 transition-all duration-300 hover:bg-opacity-90" on:click={actionSignIn} disabled={submitDisabled}>
                    Sign In
                </button>
                <p class="font-sans font-bold text-center text-base mt-20 tracking-wide">
                    No account ? <a class="text-twixtter-purple1" href="/">Sign up here</a>
                </p>
            {:else if signid == 'signup'}
                <p class="font-montserrat font-bold text-3xl my-6 uppercase tracking-wider">
                    Sign Up to <span class="text-twixtter-purple1">Twixtter</span>
                </p>
                <input type="text" name='username' placeholder='Username' required maxlength=32  bind:value={formData.username}/>
                <input type="text" name='email' placeholder='Email' required maxlength=32  bind:value={formData.email}/>
                <input type="password" name="password" placeholder='Password' required maxlength=32 bind:value={formData.password}/>
                <button class="submit-btn bg-twixtter-purple1 rounded-full font-montserrat text-xl font-bold text-white uppercase p-2 mt-12 transition-all duration-300 hover:bg-opacity-90" on:click={actionSignUp} disabled={submitDisabled}>
                    Sign Up
                </button>
                    
            {/if}
        </form>
    </div>
</PopupLayout>

<style lang="postcss">
    .submit-btn:disabled {
        @apply bg-gray-400;
    }

    input {
        @apply font-sans text-lg bg-transparent text-white tracking-wide mt-6 outline-none border-b-2;

        border-image-slice: 1;
        border-image-source: linear-gradient(90deg, #66278f 0%, rgba(170,115,210,0.2) 100%);
    }
</style>