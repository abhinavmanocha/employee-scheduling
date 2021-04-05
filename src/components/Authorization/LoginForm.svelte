<script>
    import { fade } from "svelte/transition";
    import { Link, navigate } from "svelte-routing";
    import { jwt, token, loggedUser, user } from "../../stores";

    import Input from "../Form/Input.svelte";
    import Button from "../Form/Button.svelte";

    let email = "";
    let password = "";

    let logMsg = "";

    const storeData = (data) => {
        if (data.statusCode === 200) {
            new Promise((res, rej) => {
                localStorage.setItem("user", data);
                user.set(localStorage.getItem("user"));

                localStorage.setItem("token", "1");
                token.set(localStorage.getItem("token"));

                localStorage.setItem("loggedUser", data.userId);
                loggedUser.set(localStorage.getItem("loggedUser"));

                localStorage.setItem("jwt", data.jwt);
                jwt.set(localStorage.getItem("jwt"));
            }).then(navigate("/app/schedules", { replace: true }));
        }
    };

    const signIn = async () => {
        const response = await fetch(`/login`, {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
        })
            .then((resp) => resp.json())
            .then((data) => {
                logMsg = data.message;
                storeData(data);
            });
    };
</script>

<form class="login" in:fade={{ duration: 500 }}>
    <header class="login__header">
        <h1 class="login__title">Sign in</h1>
    </header>

    <Input
        label="Username or email"
        placeholder="Username or email"
        bind:value={email}
        type="text"
        autocomplete="on"
    />
    {#if email === ""}
        <span class="login__error">This field is required</span>
    {/if}
    <Input
        label="Password"
        placeholder="Password"
        bind:value={password}
        type="password"
        autocomplete="on"
    />
    {#if password === ""}
        <span class="login__error">This field is required</span>
    {/if}

    <Button on:click={signIn} type="button">Sign In</Button>

    <span class="login__msg">{logMsg}</span>

    <Link to="restore-password" class="link">Forgot password?</Link>
</form>

<style>
    .login__header,
    h1 {
        margin: 0 auto;
    }

    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .login__error {
        margin: 0 auto;
        color: #d50000;
    }

    .login__msg {
        font-size: 1.15rem;
        font-weight: 500;
        margin: 1rem;
        color: #d50000;
    }
</style>
