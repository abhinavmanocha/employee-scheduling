<script>
    export let value;

    let strongPass = /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$/;
    let mediumPass = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))$/;
    let badPass = /^(?=.{2,}).*$/;
    let color = "#999";
    let strength;

    $: {
        if (badPass.test(value)) {
            color = "#D50000";
            strength = "pretty bad";
        } else if (mediumPass.test(value)) {
            color = "#FF9800";
            strength = "preety good";
        } else if (strongPass.test(value)) {
            color = "#4CAF50";
            strength = "strong";
        } else {
            color = "#999";
            strength = "";
        }
    }
</script>

<div class="pass" style="color: {color}">
    <span
        class="pass__indicator"
        id="indicator"
        style="background-color: {color}"
    />
    {#if strength}
        Your password is {strength}
    {/if}
</div>

<style>
    .pass {
        display: flex;
        justify-content: left;
        text-align: left;
        align-items: flex-start;
        line-height: 1rem;
    }

    .pass__indicator {
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        margin: 1px;
    }
</style>
