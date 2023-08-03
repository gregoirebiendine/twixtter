<script lang="ts">
    import type { PanelID } from '$lib/Interfaces/PopupPanel';
    import { goto } from '$app/navigation';
    import { createEventDispatcher } from 'svelte';
    import Requester from '$lib/Classes/Requester';
    import PopupLayout from './PopupLayout.svelte';
    import SignPanelSubmit from '../SignElements/SignPanelSubmit.svelte';
    import type SignFormData from '$lib/Interfaces/SignFormData';
    
    export let panelID: PanelID;
    let formEl: HTMLFormElement;
    let submitDisabled: boolean = true;

    const dispatch = createEventDispatcher();
    const formData: SignFormData = {username: '', email: '', password: ''};

    $: {
        if (Object.values(formData).every((el: string, idx: number) => {return (panelID == 'signin' && idx == 1) ? true : el.length != 0}))
            submitDisabled = false;
        else
            submitDisabled = true;
    };

    function noAccountAction() {
		dispatch('clickNoAccount');
	}

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

<PopupLayout on:click>
    <div class="bg-twixtter-bg rounded-2xl text-white p-20 relative {panelID === 'signin' ? 'pb-6' : ''}">
        <button on:click class="absolute top-4 right-4 p-2 rounded-full transition-all duration-300 hover:bg-slate-200 hover:bg-opacity-30">
            <svg class="w-[20px] select-none" xmlns="http://www.w3.org/2000/svg" width="18.828" height="18.828" viewBox="0 0 18.828 18.828">
                <g id="Groupe_1" data-name="Groupe 1" transform="translate(-168.086 -159.086)">
                  <line y1="16" x2="16" transform="translate(169.5 160.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                  <line y1="16" x2="16" transform="translate(185.5 160.5) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                </g>
            </svg>
        </button>
        
        <form class="flex flex-col justify-center" bind:this={formEl}>
            {#if panelID == 'signin'}
                <p class="font-sans text-3xl my-6 uppercase tracking-wider">
                    <img class="w-[48px] inline-block align-middle mr-2" src="/favicon.png" alt="Twixtter icon">
                    Sign In to <span class="text-twixtter-purple1">Twixtter</span>
                </p>
                <input type="text" name='username' placeholder='Username' required maxlength=32 bind:value={formData.username}/>
                <input type="password" name="password" placeholder='Password' required maxlength=32 bind:value={formData.password}/>
                <SignPanelSubmit on:click={actionSignIn} label="Sign In" disabled={submitDisabled}/>
                <p class="font-sans font-bold text-center text-base mt-20 tracking-wide">
                    No account ? <button class="text-twixtter-purple1 hover:underline" on:click={noAccountAction}>Sign up here</button>
                </p>

            {:else if panelID == 'signup'}
                <p class="font-sans text-3xl my-6 uppercase tracking-wider">
                    <img class="w-[48px] inline-block align-middle mr-2" src="/favicon.png" alt="Twixtter icon">
                    Sign Up to <span class="text-twixtter-purple1">Twixtter</span>
                </p>
                <input type="text" name='username' placeholder='Username' required maxlength=32  bind:value={formData.username}/>
                <input type="text" name='email' placeholder='Email' required maxlength=32  bind:value={formData.email}/>
                <input type="password" name="password" placeholder='Password' required maxlength=32 bind:value={formData.password}/>
                <SignPanelSubmit on:click={actionSignUp} label="Sign Up" disabled={submitDisabled}/>
                    
            {/if}
        </form>
    </div>
</PopupLayout>

<style lang="postcss">
    input {
        @apply font-sans text-lg bg-transparent text-white tracking-wide mt-6 outline-none border-b-2;

        border-image-slice: 1;
        border-image-source: linear-gradient(45deg, #4c64a7 0%, #693b9d 100%);
    }
</style>