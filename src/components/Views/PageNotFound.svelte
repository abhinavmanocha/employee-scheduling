<script>
    import { Link } from "svelte-routing";

    export let title;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main>
    <h1>Page not found 😥</h1>
    Go back to <Link to="/">Home page</Link>
</main>

<style>


</style>