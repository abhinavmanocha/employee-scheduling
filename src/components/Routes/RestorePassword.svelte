<script>
    import { Link, navigate } from "svelte-routing";
    import { fetchData } from "../../utils/utils";

    import Modal from "../Modal/Modal.svelte";
    import Navbar from "../Views/Navbar.svelte";

    import Input from "../Form/Input.svelte";
    import Button from "../Form/Button.svelte";

    let email = "";
    let isSent = false;

    let emailRegex = /\S+@\S+\.\S+/;

    const requestReset = async () => {
        const response = await fetchData(``, "POST", { email: email });

        isSent = response.statusCode === 200 ? true : false;
    };
</script>

<svelte:head>
    <title>Reset Password | Employee Scheduling</title>
</svelte:head>

<Modal>
    <Navbar />
</Modal>
<section class="restore">
    <div class="restore__wrapper">
        <header class="restore__header">
            <i class="restore__header--logo far fa-calendar-alt" />
            <h4>Schede</h4>
        </header>

        <div class="restore__info">
            <h2>Forgot your password?</h2>
            <p class="restore__para">
                Enter your email address and we will send you instructions to
                reset your email
            </p>
        </div>

        {#if isSent}
            <div>
                We sent an email to <span class="restore__confirmation--email"
                    >{email}</span
                > to help you recover your account
            </div>
        {/if}

        <form class="restore__form">
            <Input
                label="Email Address"
                placeholder="Email Address"
                bind:value={email}
                type="text"
                autocomplete="on"
            />
            {#if !emailRegex.test(email) && email}
                <span class="restore__error"
                    >Please provide a proper email address</span
                >
            {/if}

            <Button on:click={requestReset}>Reset password</Button>
        </form>

        <Link to="/">Back To Login</Link>
    </div>
</section>

<style>
    :root {
        --mainColor: #2196f3;
        --secColor: #fafafa;
        --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
        --navbarHeight: 56px;
    }

    .restore {
        display: grid;
        place-items: center;
        text-align: center;
        align-content: center;
        width: fit-content;
        box-shadow: var(--shadow);
        padding: 2.5rem;
        margin: 1rem auto;
    }

    .restore__wrapper {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        text-align: center;
    }

    .restore__header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: all 333ms ease-in;
        color: #2196f3;
        font-size: 2rem;
    }

    .restore__header h4 {
        margin: 1.25rem 0.5rem;
    }

    .restore__info h2 {
        margin: 0 auto;
    }

    .restore__para {
        font-size: larger;
        word-wrap: break-word;
        word-break: break-all;
    }

    .restore__confirmation--email {
        color: #2196f3;
        font-weight: bolder;
    }

    .restore__form {
        display: grid;
        place-items: center;
    }

    .restore__error {
        margin: 0 auto;
        color: #d50000;
    }
</style>
