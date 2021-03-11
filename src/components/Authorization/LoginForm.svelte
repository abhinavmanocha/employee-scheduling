<script>
    import { fade } from "svelte/transition";
    import { Link, navigate } from "svelte-routing";
    import { fetchData } from "../../utils/utils";
    import { token, logged, user, pass } from "../../stores";

    import Input from "../Form/Input.svelte";
    import Button from "../Form/Button.svelte";

    let username;
    let password;

    let reqData = username !== undefined || password !== undefined;

    const requestLogin = () => {};

    const signIn = async () => {
        const response = await fetchData(`https://randomuser.me/api`, "POST", {
            username: username,
            password: password,
        });

        if (reqData && response.statusCode === 200) {
            localStorage.setItem("token", "1");
            token.set(localStorage.getItem("token"));

            navigate("/dashboard", { replace: true });
        }
    };
</script>

<form class="login" in:fade={{ duration: 500 }}>
    <header class="login__header">
        <h1 class="login__title">Sign in</h1>
    </header>

    <Input
        label="Username or email"
        placeholder="Username or email"
        bind:value={username}
        type="text"
        autocomplete="on"
    />
    {#if username === ""}
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

    <Button on:click={signIn}>Sign In</Button>

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

    .link {
        color: #2196f3;
    }
</style>
