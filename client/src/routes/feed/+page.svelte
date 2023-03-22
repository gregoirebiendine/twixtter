<script lang="ts">
    import axios from "axios";
    import { goto } from '$app/navigation';

    const logout = () => {
        axios.post("http://localhost:8080/api/auth/logout", {}, {withCredentials: true}).then(() => {
            goto("/");
        }).catch((err) => {
            alert(err);
        });
    };
</script>

<section class="w-screen h-screen flex justify-center items-center">
    oui<br>
    <button on:click={logout}>LOGOUT</button><br>
</section>