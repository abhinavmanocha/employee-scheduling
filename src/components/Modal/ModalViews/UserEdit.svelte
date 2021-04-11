<script>
    import { Plane } from "svelte-loading-spinners";

    import Input from "../../Form/Input.svelte";
    import Button from "../../Form/Button.svelte";

    export let props;

    let data = {
        img_url: "",
        username: "",
        email: "",
        name: "",
        surname: "",
        country: "",
        education: "",
    };

    // get list of all countries
    const request = fetch(
        `https://schede.herokuapp.com/countries`
    ).then((resp) => resp.json());

    const updateUserInfo = () => {
        console.log(data);
    };
</script>

{#await request}
    <div class="loading">
        <Plane size="60" color="#2196f3" unit="px" duration="0.5s" />
        <p>Fetching data...</p>
    </div>
{:then response}
    <section class="user__details">
        <div class="details__wrapper">
            <div class="details__header">
                <h3>
                    <i class="fas fa-user-tie fa-1x" />
                    <span class="personal__info">Personal Information</span>
                </h3>
            </div>

            <div class="details__content">
                {#each Object.entries(props) as [key, val] (key)}
                    {#if !["id", "jobtitle", "iso", "country", "role"].includes(key)}
                        <div class="details__wrap">
                            <span class="info__header"
                                >{key == "country_id" ? "country" : key}</span
                            >
                            {#if key == "country_id"}
                                <select
                                    name="country-select"
                                    id="country-select"
                                    bind:value={data[key]}
                                >
                                    {#each response as resp}
                                        {#if resp.id == val}
                                            <option value={resp.id} selected
                                                >{resp.iso3},
                                                {resp.nicename}</option
                                            >
                                        {:else}
                                            <option value={resp.id}
                                                >{resp.iso3},
                                                {resp.nicename}</option
                                            >
                                        {/if}
                                    {/each}
                                </select>
                            {:else}
                                <Input
                                    label={val}
                                    id={key}
                                    placeholder={val}
                                    bind:value={data[key]}
                                    type="text"
                                    autocomplete="on"
                                />
                            {/if}
                        </div>
                    {/if}
                {/each}
            </div>

            <div>
                <Button on:click={updateUserInfo}>Confirm</Button>
            </div>
        </div>
    </section>
{/await}

<style>
    .loading {
        width: 50%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin: 0 auto;
        font-size: 2.5rem;
        color: #2196f3;
    }

    .user__details {
        margin: 0 auto;
        padding: 0 1.5rem;
        flex-basis: 100%;
    }

    .details__header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        text-align: center;
        align-items: center;
        color: #2196f3;
        font-size: 1.5rem;
        box-shadow: 0 3px 2px -2px #9e9e9e;
        margin: 0;
        padding: 0;
    }

    .personal__info {
        color: #535353;
    }
</style>
