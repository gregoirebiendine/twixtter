<script lang="ts">
    import axios, { type AxiosError, type AxiosResponse } from "axios";
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';

    const logout = () => {
        axios.post("http://localhost:8080/api/auth/logout", {}, {withCredentials: true}).then(() => {
            goto("/");
        }).catch((err) => {
            alert(err);
        });
    };

    onMount(() => {
        axios.post("http://localhost:8080/api/auth/islogin", {}, {withCredentials: true}).then((res: AxiosResponse) => {
            if (!res.data.user)
                goto('/');
        }).catch((err: AxiosError) => {
            console.log(err.message);
        });
    });
</script>

<section class="w-screen h-screen flex justify-center items-center">
    oui<br>
    <button on:click={logout}>LOGOUT</button><br>
</section>