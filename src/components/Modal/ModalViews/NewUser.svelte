<script>
    import Datepicker from "svelte-calendar";
    import dayjs from "dayjs";

    import Input from "../../Form/Input.svelte";
    import Button from "../../Form/Button.svelte";

    let body = {
        name: "",
        surname: "",
        jobtitle: "",
        title: "",
        reportsto: "",
        birthdate: "",
        hiredate: "",
        email: "",
        squad_id: "",
        img: "",
    };

    const createUser = () => {};
</script>

<main class="form">
    <div class="form__row">
        <Input
            label="Name"
            placeholder="Name"
            bind:value={body.name}
            type="text"
            autocomplete="on"
        />
        <Input
            label="Surname"
            placeholder="Surname"
            bind:value={body.surname}
            type="text"
            autocomplete="on"
        />
    </div>

    <div class="form__row">
        <Input
            label="Jobtitle"
            placeholder="Jobtitle"
            bind:value={body.jobtitle}
            type="text"
            autocomplete="on"
        />

        <Input
            label="Title"
            placeholder="Title"
            bind:value={body.title}
            type="text"
            autocomplete="on"
        />
    </div>

    <div class="form__row">
        <Datepicker />
    </div>

    <div class="form__row">
        <Datepicker />
    </div>

    <div class="form__row">
        <Input
            label="Email"
            placeholder="Email"
            bind:value={body.email}
            type="text"
            autocomplete="on"
        />
    </div>

    <div class="form__row">
        <Input
            label="Reports to"
            placeholder="Reports to"
            bind:value={body.reportsto}
            type="text"
            autocomplete="on"
        />
    </div>

    <div class="form__row">
        <Input
            label="Squad ID"
            placeholder="Squad ID"
            bind:value={body.squad_id}
            type="text"
            autocomplete="on"
        />
    </div>

    <div class="form__row">
        <Input
            label="Profile img url"
            placeholder="Url to your profile img"
            bind:value={body.img}
            type="text"
            autocomplete="on"
        />
    </div>
    <p><span class="indicator">*</span> mandatory</p>
    <Button on:click={createUser}>Create new User</Button>
</main>

<style>
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .form__row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>
