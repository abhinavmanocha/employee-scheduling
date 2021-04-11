<script>
    import { Plane } from "svelte-loading-spinners";

    export let size = "60";
    export let color = "#2196f3";
    export let unit = "px";
    export let duration = "0.5";
</script>

<main class="loading">
    <Plane {size} {color} {unit} {duration} />
</main>

<style>
    .loading {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin: 0 auto;
    }
</style>
