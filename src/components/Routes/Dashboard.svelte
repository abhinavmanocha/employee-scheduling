<script>
    import { Link } from "svelte-routing";
    import { token } from "../../stores";

    import Footer from "../Views/Footer.svelte";
    import Navbar from "../Views/Navbar.svelte";

    const logout = () => {
        localStorage.clear();
        token.set(localStorage.getItem("token"));
    };
</script>

<svelte:head>
    <title>Dashboard | Employee Scheduling</title>
</svelte:head>


<main>
    <h2>
        <Link to="/" on:click={logout}>Logout</Link>
    </h2>
</main>

<Footer />
