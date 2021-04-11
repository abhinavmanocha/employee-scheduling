<script>
    import { Plane } from "svelte-loading-spinners";

    import Input from "../../Form/Input.svelte";
    import Button from "../../Form/Button.svelte";

    export let props;

    const request = fetch(`https://schede.herokuapp.com/squad/departments`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
    }).then((resp) => resp.json());

    let sq_name;
    let department;

    const updateSquad = () => {
        fetch(`https://schede.herokuapp.com/squad/${props.id}`, {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            body: JSON.stringify({
                id: props.id,
                squad_name: sq_name,
                dep_id: department,
            }),
        });
    };
</script>

{#await request}
    <div class="loading">
        <Plane size="60" color="#2196f3" unit="px" duration="0.5s" />
        <p>Fetching data...</p>
    </div>
{:then data}
    <div class="form">
        <p>Squad Name</p>
        <Input
            label={props.squad_name}
            placeholder={props.squad_name}
            bind:value={sq_name}
            type="text"
            autocomplete="on"
        />

        <p>Department</p>
        <select name="" id="" bind:value={department}>
            {#each data as squad}
                <option value={squad.id}>{squad.id} - {squad.squad_name}</option
                >
            {/each}
        </select>

        <Button on:click={updateSquad}>Submit</Button>
    </div>
{/await}

<style>
    .loading {
        width: 50%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin: 0 auto;
        font-size: 2.5rem;
        color: #2196f3;
    }

    .form {
        display: flex;
        flex-direction: column;
        padding: 2rem;
    }

    p:nth-of-type(1) {
        margin: 0;
    }
</style>
