<script>
    import { Link } from "svelte-routing";
    import Modal from "../Modal/Modal.svelte";

    import Navbar from "../Views/Navbar.svelte";

    export let title;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<Modal>
    <Navbar />
</Modal>

<main class="pnf__main">
    <h1 class="pnf__header">Page not found 😥</h1>
    <p class="pnf__content">
        Go back to <Link to="/">Home page</Link>
    </p>
</main>

<style>
</style>
