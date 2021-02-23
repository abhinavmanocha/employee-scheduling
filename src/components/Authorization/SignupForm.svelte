<script>
    let username = "";
    let email;
    let pass;
    let passRepeat;

    let emailRegex = /\S+@\S+\.\S+/;
</script>

<section class="register">
    <header class="register__header">
        <h1 class="register__title">Sign up</h1>
    </header>
    {#if username == ""}
        <p>Please fill this form to create an account!</p>
    {:else}
        <p>Nice to meet you {username}</p>
    {/if}
    <input
        class="register__input"
        bind:value={username}
        type="text"
        placeholder="Username"
    />
    <input
        class="register__input"
        bind:value={email}
        type="text"
        placeholder="Email"
    />
    {#if !emailRegex.test(email) && email}
        <span class="register__error"
            >Please provide a proper email address</span
        >
    {/if}
    <input
        class="register__input register__input--password"
        bind:value={pass}
        type="text"
        placeholder="Password"
    />
    <input
        class="register__input register__input--password"
        bind:value={passRepeat}
        type="text"
        placeholder="Confirm Password"
    />
    {#if pass !== passRepeat}
        <span class="register__input--error"
            >Make sure both passwords matches</span
        >
    {/if}
    <button>Sign up</button>
</section>

<style>
    .register {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .register__input {
        color: red;
    }

    .register__input--password {
        color: red;
    }
</style>
