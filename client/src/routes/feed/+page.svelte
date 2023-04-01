<script lang="ts">
    import { goto } from '$app/navigation';
    
    import type TwixData from "$lib/Interfaces/TwixData";
    import type UserData from "$lib/Interfaces/UserData";
    import TwixPost from "$lib/Components/TwixPost.svelte";
    import PageLayout from "$lib/Components/PageLayout.svelte";
    import SearchBar from "$lib/Components/SearchBar.svelte";
    import { clickOutside } from "$lib/Events/ClickOutside";
    import TwixsList from '$lib/Components/TwixsList.svelte';

    /** @type {import('./$types').PageServerData} */
    export let data: {connectedUser: UserData, feed: Array<TwixData>};

    let twixForm: HTMLFormElement;
    let hrTwixForm: HTMLHRElement;
    let sendTwixBtnDisabled: boolean = true;

    function logout() {
        fetch("http://localhost:8080/api/auth/logout", {method: 'POST', credentials: 'include'}).then(() => {
            goto("/");
        }).catch((err) => {
            console.log(err);
        });
    };

    function handleTextAreaInput(e: Event) {
        let textArea: HTMLTextAreaElement = e.target as HTMLTextAreaElement;

        if ((e as InputEvent).inputType == "deleteContentBackward")
            textArea.style.height = "auto";
        textArea.style.height = textArea.scrollHeight + "px";
        sendTwixBtnDisabled = (textArea.value.length > 0) ? false : true;
    }

    function handleTextAreaClick(clicked: boolean) {
        if (clicked)
            hrTwixForm.classList.replace('border-white', 'border-twixtter-blue');
        else
            hrTwixForm.classList.replace('border-twixtter-blue', 'border-white');
    }

    function postTwix() {
        const formData = new FormData(twixForm);
        fetch('http://localhost:8080/api/users/twix', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                textContent: formData.get('textContent'),
                mediaContent: null,
                postDate: new Date().toISOString().slice(0, 19).replace('T', ' ')
            })
        }).then(() => {
            let textArea: HTMLTextAreaElement = document.querySelector('textarea') as HTMLTextAreaElement;
            textArea.value = '';
            textArea.style.height = "auto";
            sendTwixBtnDisabled = (textArea.value.length > 0) ? false : true;
        }).catch(err => {
            alert(err);
        });
    }
</script>

<svelte:head>
	<title>Twixtter - Feed</title>
</svelte:head>

<PageLayout>
    <SearchBar />

    <div class="w-full px-6 py-4 mt-6 border-y-[1px] border-gray-200 flex flex-row">
        <div class="mr-4">
            <img class="w-[48px] rounded-full" src={data.connectedUser.profilePhoto} alt={`${data.connectedUser.username} photo`}>
        </div>
        <div class="flex flex-col flex-1">
            <form method="post" action="/feed" class="w-full py-1 pl-2" bind:this={twixForm}>
                <textarea name="textContent" placeholder="Whats happening ?" rows="1" minlength="1" maxlength="192" required use:clickOutside={() => handleTextAreaClick(false)} on:click={() => handleTextAreaClick(true)} on:input={handleTextAreaInput}/>
            </form>
            <hr class="w-full ml-2 border-white transition-all duration-200" bind:this={hrTwixForm}>
            <div class="w-full flex flex-row justify-between mt-4">
                <button class="p-2 flex justify-center items-center transition-all duration-200 rounded-full hover:bg-gray-100">
                    <svg class="w-[24px] fill-current text-twixtter-blue" viewBox="0 0 24 24" aria-hidden="true">
                        <g><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path></g>
                    </svg>
                </button>
                <button class="sendTwixBtn bg-twixtter-blue rounded-full font-montserrat text-base font-bold text-white px-4 py-2 transition-all duration-300" disabled={sendTwixBtnDisabled} on:click={postTwix}>
                    Send Twix
                </button>
            </div>
        </div>
    </div>

    <TwixsList list={data.feed}/>
    <button on:click={logout}>LOGOUT</button>
</PageLayout>

<style lang="postcss">
    textarea {
        @apply w-full font-sans text-lg text-twixtter-gray tracking-wide outline-none resize-none;
    }

    .sendTwixBtn:hover:enabled{
        @apply bg-twixtter-blue-dark;
    }

    .sendTwixBtn:disabled {
        @apply opacity-50;
    }
</style>