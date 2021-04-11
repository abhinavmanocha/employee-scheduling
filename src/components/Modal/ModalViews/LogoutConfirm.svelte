<script>
    import { getContext } from "svelte";
    import { navigate } from "svelte-routing";

    import { token } from "../../../stores";

    const { close } = getContext("simple-modal");

    const logout = () => {
        localStorage.clear();
        token.set(localStorage.getItem("token"));

        navigate("/", { replace: true });
        window.location.reload(true);
    };

    const logoutCancel = () => {
        close();
    };
</script>

<div class="logout">
    <header class="logout__header">
        <h1>Confirm logout</h1>
    </header>

    <div class="logout__msg">Are you sure you want to log out?</div>

    <div class="logout__actions">
        <button
            type="button"
            class="logout__action logout__action--yes"
            on:click={logout}>Yes</button
        >
        <button
            type="button"
            class="logout__action logout__action--no"
            on:click={logoutCancel}>No</button
        >
    </div>
</div>

<style>
    :root {
        --primary: #2196f3;
    }

    .logout {
        max-width: fit-content;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        color: var(--primary);
    }

    .logout__msg {
        font-size: 1.5rem;
        font-weight: 500;
    }

    .logout__actions {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 2rem 0;
    }

    .logout__action {
        flex-basis: 50%;
        text-transform: uppercase;
        font-weight: bolder;
        background: transparent;
        color: var(--primary);
        border: 2px solid var(--primary);
        cursor: pointer;
        margin: 0 1rem;
        transition: all 250ms;
    }

    .logout__action:hover {
        background-color: var(--primary);
        color: white;
    }
</style>
