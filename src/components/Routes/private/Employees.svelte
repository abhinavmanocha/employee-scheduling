<script>
    import { onMount, getContext } from "svelte";
    import { Datatable, rows } from "svelte-simple-datatables";

    import { Plane } from "svelte-loading-spinners";

    const { open } = getContext("simple-modal");

    const request = fetch(
        `/user/${localStorage.getItem(
            "loggedUser"
        )}/employees`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        }
    ).then((resp) => resp.json());

    const settings = {
        sortable: true,
        pagination: true,
        columnFilter: true,
        rowPerPage: 15,
    };
</script>

<svelte:head>
    <title>Employees | Employee Scheduling</title>
</svelte:head>

{#await request}
    <main class="loading">
        <Plane size="60" color="#2196f3" unit="px" duration="0.5s" />
        <p>Fetching Data...</p>
    </main>
{:then data}
    <main class="employees">
        <Datatable {settings} {data}>
            <thead class="sortable__head">
                <th data-key="img" />
                <th data-key="id">Id</th>
                <th data-key="name">Name</th>
                <th data-key="surname">Surname</th>
                <th data-key="email">Email</th>
                <th data-key="squad_name">Squad name</th>
                <th data-key="edit">Edit</th>
            </thead>
            <tbody class="sortable__body">
                {#each $rows as row}
                    <tr>
                        <td>
                            <img
                                src={row.img}
                                alt={rows.name}
                                class="data__cell-img"
                            />
                        </td>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.surname}</td>
                        <td>{row.email}</td>
                        <td>{row.squad_name}</td>
                        <td>
                            <a href={"#"}>Edit</a>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </Datatable>
    </main>
{:catch error}
    <main class="loading">
        <p>{error.message}</p>
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
        font-size: 2.5rem;
        color: #2196f3;
    }

    .employees {
        height: 80vh;
        margin: 1.5rem 7rem;
    }

    th {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* tr {
        width: 100%;
        margin: 0 auto;
    }

    .sortable__head,
    .sortable__body,
    th,
    td {
        text-align: center;
        margin: 0 auto;
    } */

    .data__cell-img {
        object-fit: cover;
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }

    @media screen and (max-width: 798px) {
        .employees {
            margin: 1rem 2rem;
            margin-bottom: 6rem;
            flex-direction: column;
            justify-content: center;
        }
    }
</style>
