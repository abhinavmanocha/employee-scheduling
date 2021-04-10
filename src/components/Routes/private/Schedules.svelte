<script>
    import { onMount, getContext } from "svelte";
    import { Datatable, rows } from "svelte-simple-datatables";

    import { Plane } from "svelte-loading-spinners";

    import Calendar from "../../Calendar/Calendar.svelte";

    const request = fetch(
        `https://schede.herokuapp.com/user/${localStorage.getItem(
            "loggedUser"
        )}/employees`,
        {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        }
    ).then((resp) => resp.json());

    const today = new Date();
    const year = new Date().getFullYear();
</script>

<svelte:head>
    <title>Schedules | Employee Scheduling</title>
</svelte:head>

{#await request}
    <main class="error">
        <Plane size="60" color="#2196f3" unit="px" duration="0.5s" />
        <p>Fetching Data...</p>
    </main>
{:then data}
    <main class="schedules">
        <Calendar {today} {year} />
    </main>
{/await}

<style>
    :root {
        --mainColor: #2196f3;
        --secColor: #fafafa;
        --shadow: 0 1px 1px rgba(104, 104, 104, 0.8);
    }

    .error {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin: 0 auto;
        font-size: 2.5rem;
        color: #2196f3;
    }

    .schedules {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 2.5rem;
        margin-left: 7rem;
    }

    @media screen and (max-width: 798px) {
        .schedules {
            margin: 1rem 2rem;
            margin-bottom: 6rem;
            flex-direction: column;
            justify-content: center;
        }
    }
</style>
