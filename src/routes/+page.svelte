<script lang="ts">
    import Signature from "$lib/components/Signature.svelte";
    import { onMount } from "svelte";
    // noinspection TypeScriptCheckImport
    import IconEmailOutline from "virtual:icons/mdi/email-outline?raw&width=3em&height=3rem";
    // noinspection TypeScriptCheckImport
    import IconGithub from "virtual:icons/mdi/github?raw&width=3rem&height=3rem";
    import { fly } from "svelte/transition";

    // svelte animations need a trigger to start
    let start = false;
    onMount(() => (start = true));
</script>

<main>
    <div class="animated" id="wrapper">
        <Signature />
    </div>
    {#if start}
        <ol>
            <!-- eslint-disable svelte/no-at-html-tags -->
            <li in:fly={{ y: 200, duration: 300, delay: 3100 }}>
                <a href="https://github.com/gyoge0/">
                    {@html IconGithub}
                </a>
            </li>
            <li in:fly={{ y: 200, duration: 300, delay: 3200 }}>
                <a href="mailto:yogesh@gyoge.com">
                    {@html IconEmailOutline}
                </a>
            </li>
            <!-- eslint-enable svelte/no-at-html-tags -->
        </ol>
    {/if}
</main>

<style>
    div {
        width: 100%;
        max-width: 1000px;
    }

    ol {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        color: #d1e3e1;
        padding: 0;
    }

    li,
    a {
        all: unset;
    }

    a:hover {
        cursor: pointer;
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: var(--main-background-color);
        font-family: sans-serif;
        padding: 5%;
        gap: 2rem;
    }
</style>
