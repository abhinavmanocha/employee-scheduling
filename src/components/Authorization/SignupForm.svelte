<script>
    import { fade } from "svelte/transition";
    import { Link, navigate } from "svelte-routing";
    import { isEmpty, fetchData } from "../../utils/utils";

    import Input from "../Form/Input.svelte";
    import Button from "../Form/Button.svelte";
    import PassIndicator from "./PassIndicator.svelte";

    let username = "";
    let email = "";
    let pass = "";
    let passRepeat = "";
    let data;
    let logged;

    let emailRegex = /\S+@\S+\.\S+/;

    $: {
        data = {
            username: username,
            email: email,
            pass: pass,
            name: "",
            surname: "",
            role: "user",
        };
    }

    const registerUser = async () => {
        if (!isEmpty(data)) {
            const resp = await fetchData(
                `https://randomuser.me/api`,
                "POST",
                data
            );

            if (resp.statusCode === 200) {
                logged = resp.data.results;
            }
        }
    };
</script>

<form class="register" in:fade={{ duration: 500 }}>
    <header class="register__header">
        <h1 class="register__title">Sign up</h1>
    </header>

    {#if username == ""}
        <p>Please fill this form to create an account!</p>
    {:else}
        <p>Nice to meet you <span class="register__hello">{username}</span></p>
    {/if}

    <Input
        label="Username"
        placeholder="Username"
        bind:value={username}
        type="text"
        autocomplete="on"
    />

    <Input
        label="Email"
        placeholder="Email"
        bind:value={email}
        type="text"
        autocomplete="on"
    />
    {#if !emailRegex.test(email) && email}
        <span class="register__error"
            >Please provide a proper email address</span
        >
    {/if}

    <div class="register__input--group">
        <Input
            label="Password"
            placeholder="Password"
            bind:value={pass}
            type="password"
            autocomplete="on"
        />
        {#if pass}
            <PassIndicator bind:password={pass} />
        {/if}
    </div>

    <Input
        label="Confirm Password"
        placeholder="Confirm Password"
        bind:value={passRepeat}
        type="password"
        autocomplete="on"
    />
    {#if pass !== passRepeat && pass}
        <span class="register__error">Make sure both passwords matches</span>
    {/if}
    
    <Button on:click={registerUser}>Sign Up</Button>

    {#if logged}
        <span class="register__successfull">{logged}</span>
    {/if}
</form>

<style>
    .register__header,
    h1 {
        margin: 0 auto;
    }

    .register {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .register__input--group {
        display: flex;
        flex-flow: column nowrap;
    }

    .register__hello {
        color: #2196f3;
        font-weight: bolder;
    }

    .register__error {
        margin: 0 auto;
        color: #d50000;
    }

    .register__successfull {
        margin: 0 auto;
        color: #2196f3;
    }
</style>
