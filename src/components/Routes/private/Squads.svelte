<script>
    import { Plane } from "svelte-loading-spinners";

    const test = 0;
</script>

<svelte:head>
    <title>Your Squads | Employee Scheduling</title>
</svelte:head>

{#await test}
    <main class="loading">
        <Plane size="60" color="#2196f3" unit="px" duration="0.5s" />
    </main>
{:then data}
    <main class="squads">
        <div>Squads</div>
    </main>
{/await}

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
    
    .squads {
        display: flex;
        margin: 1rem auto;
        text-align: center;
        margin-left: 7rem;
    }

    @media screen and (max-width: 798px) {
        .squads {
            margin: 1rem 2rem;
            margin-bottom: 6rem;
            flex-direction: column;
            justify-content: center;
        }
    }
</style>
