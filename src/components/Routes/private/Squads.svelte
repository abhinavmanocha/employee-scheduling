<script>
    import { getContext } from "svelte";
    import { Plane } from "svelte-loading-spinners";

    import UpdateSquad from "../../Modal/ModalViews/UpdateSquad.svelte";

    const { open } = getContext("simple-modal");

    const updateSquad = (e, squad) => {
        open(UpdateSquad, { props: squad });
    };

    const deleteSquad = (e, id) => {
        if (confirm(`\nAre you sure you want to delete squad with id = ${id}`)) {
            fetch(`https://schede.herokuapp.com/squad/${id}`, {
                method: "DELETE",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            }).then(window.location.reload(true));
        }
    };

    const departments = fetch(
        `https://schede.herokuapp.com/squad/departments`,
        {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        }
    ).then((res) => res.json());

    const populateSelect = (data, parentNode) => {
        data.forEach((elem) => {
            const optNode = document.createElement("option");
            optNode.value = elem.id;
            optNode.innerText = elem.name;

            parentNode.appendChild(optNode);
        });
    };

    const create = () => {
        if (document.querySelectorAll("#new").length > 1) {
            return;
        }

        const elem = document.querySelector("tbody");
        const row = document.createElement("tr");

        const row1 = document.createElement("td");
        const row2 = document.createElement("td");
        const row3 = document.createElement("td");
        const row4 = document.createElement("td");

        const inpText = document.createElement("input");
        inpText.type = "text";
        inpText.placeholder = "Squad Name";
        inpText.autofocus = true;

        const inpSelect = document.createElement("select");
        console.log(departments);
        populateSelect(Promise.resolve(departments), inpSelect);

        row2.appendChild(inpText);
        row3.appendChild(inpSelect);

        row.appendChild(row1);
        row.appendChild(row2);
        row.appendChild(row3);
        elem.appendChild(row);
    };

    let good = false;

    const request = fetch(`http://schede.herokuapp.com/squad`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
    }).then((resp) => {
        return resp.json();
    });

    const settings = {
        sortable: true,
        pagination: true,
        columnFilter: true,
        rowPerPage: 15,
    };

    let searchCriteria;

    const sort = () => {
        
    }
</script>

<svelte:head>
    <title>Your Squads | Employee Scheduling</title>
</svelte:head>

{#await request}
    <main class="error">
        <Plane size="60" color="#2196f3" unit="px" duration="0.5s" />
        <p>Fetching Data...</p>
    </main>
{:then data}
    {#if data.length < 1}
        <main class="error">
            <p>{data.error} 😥</p>
            <p>{data.message}</p>
        </main>
    {:else}
        <main class="squads">
            <div class="squads__wrapper">
                <header class="squads__header">
                    <button class="cr__button cr__button--add" on:click={create}
                        >Create new Squad</button
                    >
                    <input
                        type="text"
                        placeholder="Search by name..."
                        on:change={() => {sort()}}
                        bind:value={searchCriteria}
                    />
                </header>
                <div class="table__wrapper">
                    <table class="table">
                        <thead class="table__header">
                            <tr class="table__header--row">
                                <th>Id</th>
                                <th>Squad Name</th>
                                <th>Department</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="table__body">
                            {#each data as squad}
                                <tr class="table__data--row">
                                    <td class="squad__id">{squad.id}</td>
                                    <td class="squad__name"
                                        >{squad.squad_name}</td
                                    >
                                    <td class="squad__dep">{squad.name}</td>
                                    <td class="operations">
                                        <button
                                            class="cr__button cr__button--edit"
                                            on:click={(e) => {
                                                updateSquad(e, squad);
                                            }}
                                            >Edit</button
                                        >
                                        <button
                                            class="cr__button cr__button--delete"
                                            on:click={(e) => {
                                                deleteSquad(e, squad.id);
                                            }}>Delete</button
                                        >
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    {/if}
{/await}

<style>
    :root {
        --mainColor: #2196f3;
        --secColor: #fafafa;
        --shadow: 0 1px 1px rgba(104, 104, 104, 0.8);
    }

    ::placeholder {
        font-size: 1.25rem;
        font-weight: 500;
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

    .squads {
        display: flex;
        margin: 2rem auto;
        text-align: center;
        justify-content: center;
    }

    .squads__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .table__wrapper {
        overflow-x: auto;
    }

    .table {
        border-collapse: separate;
        border-spacing: 2rem 1rem;
        margin: 2.5rem;
    }

    .cr__button {
        cursor: pointer;
        padding: 0.5rem 0.75rem;
        border-radius: 4px;
        font-size: 1.25rem;
        font-weight: 450;
        text-align: center;
        background-color: var(--mainColor);
        color: var(--secColor);
        transition: all 500ms;
    }

    .cr__button--edit,
    .cr__button--delete {
        margin: 0 0.5rem;
    }

    .cr__button--add:hover,
    .cr__button--add:active {
        background-color: #0277bd;
    }

    .cr__button--edit {
        background-color: #4caf50;
    }

    .cr__button--edit:hover,
    .cr__button--edit:active {
        background-color: #2e7d32;
    }

    .cr__button--delete {
        background-color: #f44336;
    }

    .cr__button--delete:hover,
    .cr__button--delete:active {
        background-color: #c62828;
    }

    .table__data--row {
        margin: 1rem;
    }

    thead th:nth-child(1) {
        width: 5%;
    }

    thead th:nth-child(2) {
        width: 35%;
    }

    thead th:nth-child(3) {
        width: 35%;
    }

    thead th:nth-child(4) {
        width: 25%;
    }

    th {
        margin: 0 auto;
        padding: 0.5rem;
    }

    .operations {
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 798px) {
        .squads {
            margin: 0;
            margin-bottom: 6rem;
            flex-direction: column;
            justify-content: center;
        }

        .squads__header {
            flex-direction: column;
            margin: 1rem;
        }

        .table {
            border-spacing: 0.5rem;
        }
    }
</style>
