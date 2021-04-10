<script>
    import Input from "../../Form/Input.svelte";
    import Button from "../../Form/Button.svelte";

    export let props;
    let data = {};

    const updateSquad = () => {
        fetch(`https://schede.herokuapp.com/squad/${props.id}`, {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            body: JSON.stringify(data),
        });
    };
</script>

<div class="form">
    <Input
        label={props.squad_name}
        placeholder={props.squad_name}
        bind:value={data.name}
        type="text"
        autocomplete="on"
    />

    <Input
        label={props.name}
        placeholder={props.name}
        bind:value={data.department}
        type="text"
        autocomplete="on"
    />

    <Button on:click={updateSquad}>Submit</Button>
</div>

<style>
    .form {
        padding: 2rem;
    }
</style>
