<script>
    import { Link } from "svelte-routing";

    export let title;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main class="pnf__main">
    <h1 class="pnf__header">Page not found 😥</h1>
    <p class="pnf__content">
        <span class="pnf__link">
            Go back to <Link to="/">Home page</Link>
        </span>
        <span class="pnf__link">
            or go back to <a href={"javascript:history.back()"}>Previous page</a>
        </span>
        <span class="pnf__link">
            or <a href={"javascript:window.location.reload(true)"}>refresh your page</a>
        </span>
    </p>
</main>

<style>
    .pnf__main {
        display: grid;
        height: calc(100vh - 60px);
        place-content: center;
        text-align: center;
    }

    .pnf__header {
        font-size: 2.5rem;
    }

    .pnf__content {
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
    }

    .pnf__link {
        margin: 0.85rem;
    }
</style>
