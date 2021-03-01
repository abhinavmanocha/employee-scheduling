<script>
    import { onMount } from "svelte";
    import { Link, navigate } from "svelte-routing";
    import { token } from "../../stores";
    import Modal from "../Modal/Modal.svelte";

    import Navbar from "../Views/Navbar.svelte";
    import Footer from "../Views/Footer.svelte";

    export let title;

    const login = () => {
        localStorage.setItem("token", "1");
        token.set(localStorage.getItem("token"));

        navigate("/dashboard", { replace: true });
    };

    onMount(() => {});
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main class="home">
    <Modal>
        <Navbar />
    </Modal>

    <section class="home__section">
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ut voluptas voluptatem! Nam ea expedita numquam sed,
                maiores blanditiis ipsa doloribus itaque autem excepturi
                inventore. Pariatur, excepturi illum! Quidem, sapiente.
            </p>

            <Link to="dashboard">Go to dashboard</Link>

            <button on:click={login}>Login</button>
        </div>
    </section>

    <Footer />
</main>

<style>
    .home {
        min-height: 100vh;
        overflow: hidden;
        display: flex;
        flex-flow: column nowrap;
        position: relative;
    }
</style>
