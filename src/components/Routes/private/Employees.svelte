<script>
    import { onMount, getContext } from "svelte";
    import { Datatable, rows } from "svelte-simple-datatables";

    import { Plane } from "svelte-loading-spinners";

    import NewUser from "../../Modal/ModalViews/NewUser.svelte";

    const { open } = getContext("simple-modal");

    let good = false;

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
    ).then((resp) => {
        if (resp.ok) {
            good = true;
            return resp.json();
        } else {
            good = false;
        }
    });

    const settings = {
        sortable: true,
        pagination: true,
        columnFilter: true,
        rowPerPage: 15,
    };

    const addNewEmployee = () => {
        open(NewUser);
    };
</script>

<svelte:head>
    <title>Employees | Employee Scheduling</title>
</svelte:head>

{#await request}
    <main class="error">
        <Plane size="60" color="#2196f3" unit="px" duration="0.5s" />
        <p>Fetching Data...</p>
    </main>
{:then data}
    {#if !good}
        <main class="error">
            <p>{data.error}</p>
            <p>{data.message}</p>
        </main>
    {:else if data != null}
        <main class="employees">
            <Datatable {settings} {data}>
                <thead class="sortable__head">
                    <th data-key="img">Img</th>
                    <th data-key="id">Id</th>
                    <th data-key="name">Name</th>
                    <th data-key="surname">Surname</th>
                    <th data-key="email">Email</th>
                    <th data-key="squad_name">Squad name</th>
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
                        </tr>
                    {/each}
                </tbody>
            </Datatable>
        </main>
    {:else}
        <div class="employee-add">
            <h1>You don't have any employee yet 🤔</h1>
            <button on:click={addNewEmployee} class="employee-add--bttn">Add new</button>
        </div>
    {/if}
{:catch error}
    <main class="error">
        <p>{error.message}</p>
    </main>
{/await}

<div class="row">
    <div class="column">
        <p />
    </div>
    <div class="column">
        <p />
    </div>
</div>

<style>
    .error {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 0;
        font-size: 2.5rem;
        color: #2196f3;
    }

    .employee-add {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        width: fit-content;
        margin: 0 auto;
        color: #2196f3;
    }

    .employee-add--bttn {
        font-size: 1.25rem;
        text-transform: uppercase;
        font-weight: 500;
        background-color: transparent;
        color: #2196f3;
        border: 2px solid #2196f3;
        cursor: pointer;
        transition: all 500ms;
    }

    .employee-add--bttn:hover {
        color: #fafafa;
        background-color: #2196f3;
    }

    .employees {
        height: 80vh;
        margin: 1rem 7rem;
    }

    th {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: fit-content;
        margin: 0 auto;
        text-align: center;
    }

    td {
        text-align: center;
        padding: 4px 0;
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
