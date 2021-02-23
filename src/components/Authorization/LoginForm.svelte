<script>
</script>

<section class="login">
    <header class="login__header">
        <h1 class="login__title">Sign in</h1>
    </header>
    <input
        class="login__input"
        type="text"
        placeholder="Username or email address"
    />
    <input
        class="login__input login__input--password"
        type="text"
        placeholder="Password"
    />
    <div class="login__additional">
        <button class="login__button">Sign In</button>
        <a href="/">Forgot Password?</a>
    </div>
</section>

<style>
    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .login__input {
        color: red;
    }

    .login__input--password {
        color: red;
    }

    .login__button {
        color: red;
    }
</style>
