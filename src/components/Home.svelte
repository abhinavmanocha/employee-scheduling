<script>
    import { getContext } from "svelte";
    import Login from "./Authorization/Login.svelte";

    export let title;

    const { open } = getContext("simple-modal");

    const showLoginScreen = () => {
        open(Login);
    };
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main>
    <nav>
        <button on:click={showLoginScreen}>Join Us!</button>
    </nav>

    <footer />
</main>

<style>
</style>
