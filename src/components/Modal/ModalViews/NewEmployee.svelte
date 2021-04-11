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
        reportsto: localStorage.getItem("loggedUser"),
        birthdate: "",
        hiredate: "",
        email: "",
        squad_id: "",
        img: "",
    };

    let msg = "";

    const createUser = () => {
        fetch(`http://schede.herokuapp.com/employee`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            body: JSON.stringify(body),
        })
            .then((resp) => {
                return resp.json();
            })
            .then((resp) => (msg = resp.message));
    };

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

        <div class="form__date">
            <p>Birth Date</p>
            <Datepicker
                bind:formattedSelected={body.birthdate}
                buttonBackgroundColor="#2196f3"
                buttonTextColor="white"
                highlightColor="#2196f3"
                dayBackgroundColor="#efefef"
                dayTextColor="#333"
                dayHighlightedBackgroundColor="#2196f3"
                dayHighlightedTextColor="#fafafa"
            />
        </div>

        <div class="form__date">
            <p>Hire Date</p>
            <Datepicker
                bind:formattedSelected={body.hiredate}
                buttonBackgroundColor="#2196f3"
                buttonTextColor="white"
                highlightColor="#2196f3"
                dayBackgroundColor="#efefef"
                dayTextColor="#333"
                dayHighlightedBackgroundColor="#2196f3"
                dayHighlightedTextColor="#fafafa"
            />
        </div>

        <Input
            label="Email"
            placeholder="Email"
            bind:value={body.email}
            type="text"
            autocomplete="on"
        />

        <Input
            label="Squad ID"
            placeholder="Squad ID"
            bind:value={body.squad_id}
            type="text"
            autocomplete="on"
        />

        <Input
            label="Profile img url"
            placeholder="Url to your profile img"
            bind:value={body.img}
            type="text"
            autocomplete="on"
        />
    </div>

    <span class="message">aa{msg}</span>
    <Button on:click={createUser}>Create new User</Button>
</main>

<style>
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 1.25rem;
    }

    .form__row {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        margin: 0;
    }

    .form__date p {
        font-size: 1.12rem;
        font-weight: 500;
        margin: 0;
    }

    .message {
        text-align: center;
        color: #4caf50;
    }
</style>
