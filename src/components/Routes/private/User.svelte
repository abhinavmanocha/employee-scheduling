<script>
    import { onMount, getContext } from "svelte";

    import { Plane } from "svelte-loading-spinners";

    import ChangeIcon from "../../Modal/ModalViews/ChangeIcon.svelte";
    import UserEdit from "../../Modal/ModalViews/UserEdit.svelte";

    const { open } = getContext("simple-modal");

    const request = fetch(
        `/user/${localStorage.getItem("loggedUser")}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        }
    ).then((resp) => resp.json());

    const changeProfileIcon = () => {
        open(ChangeIcon, { type: ChangeIcon });
    };

    const openModalEdit = (prop) => {
        open(UserEdit, { props: prop });
    };
</script>

<svelte:head>
    <title>Your Profile | Employee Scheduling</title>
</svelte:head>

{#await request}
    <main class="loading">
        <Plane size="60" color="#2196f3" unit="px" duration="0.5s" />
        <p>Fetching Data...</p>
    </main>
{:then data}
    <main class="user">
        <section class="user__card">
            <div
                class="card__container card__container--image"
                on:click={changeProfileIcon}
            >
                <img
                    src={data.img_url || "/imgs/default.png"}
                    width="128"
                    height="128"
                    alt="ALT"
                    class="card__image  noselect"
                />
                <span class="card__button--upload noselect">
                    <i class="fas fa-marker" />
                    Update your photo
                </span>
            </div>

            <div class="card__container card__container--info">
                <h2>{data.name || "name"} {data.surname || "surname"}</h2>
                <span class="card__position"
                    >{data.jobtitle || "unemployed"}</span
                >
                <p class="card__data">
                    <strong>Location:</strong>
                    <span
                        >{`${data.iso || "unknown"}, ` +
                            `${data.country || "unknown"}`}</span
                    >
                </p>
                <p class="card__data">
                    <strong>Education:</strong>
                    <span>{data.education || "unknown"}</span>
                </p>
            </div>
        </section>

        <section class="user__details">
            <div class="details__wrapper">
                <div class="details__header">
                    <h3>
                        <i class="fas fa-user-tie fa-1x" />
                        <span class="personal__info">Personal Information</span>
                    </h3>
                    <span
                        class="update__button update__button--active"
                        on:click={() => openModalEdit(data)}>Edit</span
                    >
                </div>

                <div class="details__content">
                    {#each Object.entries(data) as [key, val] (key)}
                        {#if key != "country_id"}
                            {#if key == "img_url"}
                                <div class="details__wrap">
                                    <span class="info__header">{key}</span>
                                    <a
                                        class="info__data"
                                        href={val}
                                        target="_blank">{val}</a
                                    >
                                </div>
                            {:else}
                                <div class="details__wrap">
                                    <span class="info__header">{key}</span>
                                    <span class="info__data">{val}</span>
                                </div>
                            {/if}
                        {/if}
                    {/each}
                </div>
            </div>
        </section>
    </main>
{:catch error}
    <main class="loading">
        <p>{error.message}</p>
    </main>
{/await}

<style>
    .noselect {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .loading {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin: 0 auto;
        font-size: 2.5rem;
        color: #2196f3;
    }

    .user {
        margin: 1rem 7rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .user__card,
    .user__details {
        margin: 1rem 0;
        padding: 1.5rem;
        box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
        flex-basis: 100%;
    }

    .user__card {
        width: fit-content;
        display: flex;
        flex-flow: row nowrap;
        padding-bottom: 0;
    }

    .card__container {
        margin: 1rem;
    }

    .card__container--image {
        position: relative;
        user-select: none;
    }

    .card__button--upload {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 14px;
        text-align: center;
        font-weight: bolder;
        font-size: 1.15rem;
        display: none;
        color: #2196f3;
        background-color: rgba(104, 104, 104, 0.25);
    }

    .card__container--image:hover {
        cursor: pointer;
    }

    .card__container--image:hover > .card__button--upload {
        display: block;
        transition: display 5s;
    }

    .card__image {
        object-fit: cover;
        object-position: center;
        max-width: 100%;
        max-height: 100%;
        border: 1px solid #b9b9b9;
        border-radius: 2px;
    }

    .card__container h2 {
        margin: 0;
    }

    .card__position {
        text-transform: uppercase;
        font-weight: 500;
        margin: 0;
    }

    .card__data {
        margin: 1rem auto;
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
    }

    .details__header h3 {
        margin-left: 1rem;
    }

    .details__content {
        margin: 1rem;
    }

    .details__wrap {
        display: flex;
        box-shadow: 0 2px 2px -2px #b9b9b9;
        padding: 0.75rem 0;
    }

    .info__header {
        flex-basis: 50%;
        font-size: 1.3rem;
        font-weight: 600;
        text-transform: capitalize;
        letter-spacing: 2px;
        color: black;
        padding-left: 0.5rem;
    }

    .info__data {
        flex-basis: 50%;
        margin: 0 auto;
        color: #2b2b2b;
        font-size: 1.25rem;
    }

    .update__button--active {
        margin: 0 auto;
        margin-right: 1rem;
    }

    .update__button--active:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    .personal__info {
        margin-left: 1rem;
        color: #535353;
    }

    @media screen and (max-width: 798px) {
        .user {
            margin: 1rem 2rem;
            margin-bottom: 6rem;
            flex-direction: column;
            justify-content: center;
        }
        .user__card,
        .user__details {
            margin: 1rem auto;
            width: 80%;
        }

        .card__image {
            width: auto;
            min-width: 50%;
        }

        .details__header h3,
        .update__button {
            margin: 0 auto;
            margin-bottom: 1rem;
        }

        .details__content {
            text-align: left;
        }

        .info__header,
        .info__data {
            overflow: auto;
        }
    }

    @media screen and (max-width: 600px) {
        .user__card,
        .user__details,
        .details__header {
            flex-direction: column;
        }

        .user__card {
            text-align: center;
        }

        .update__button {
            width: 100%;
            flex-basis: 100%;
            background-color: #2196f3;
            border-radius: 0.8rem;
            color: #fafafa;
            margin: 0 auto;
            margin-bottom: 1.5rem;
        }
    }
</style>
