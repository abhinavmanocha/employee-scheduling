<script>
    import { fade } from "svelte/transition";
    import { Link } from "svelte-routing";

    import Input from "../Form/Input.svelte";
    import Button from "../Form/Button.svelte";

    let username = "";
    let password = "";

    const signIn = () => {};
</script>

<form class="login" in:fade={{ duration: 500 }}>
    <header class="login__header">
        <h1 class="login__title">Sign in</h1>
    </header>

    <Input
        label="Username"
        placeholder="Username or email address"
        bind:value={username}
        type="text"
        required
    />
    <Input
        label="Password"
        placeholder="Password"
        bind:value={password}
        type="text"
        required
    />

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

    .link {
        color: #2196f3;
    }
</style>
