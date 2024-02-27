<script lang="ts">
    import Signature from "$lib/components/Signature.svelte";
    import { onMount } from "svelte";
    // noinspection TypeScriptCheckImport
    import IconEmailOutline from "virtual:icons/mdi/email-outline?raw&width=3em&height=3rem";
    // noinspection TypeScriptCheckImport
    import IconGithub from "virtual:icons/mdi/github?raw&width=3rem&height=3rem";
    // noinspection TypeScriptCheckImport
    import IconInstagram from "virtual:icons/mdi/instagram?raw&width=3rem&height=3rem";

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
            <li style="animation-delay: 3100ms">
                <a href="https://github.com/gyoge0/">
                    {@html IconGithub}
                </a>
            </li>
            <li style="animation-delay: 3200ms">
                <a href="https://www.instagram.com/gyoge0/">
                    {@html IconInstagram}
                </a>
            </li>
            <li style="animation-delay: 3300ms">
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
        color: var(--cyan-0);
        padding: 0;
    }

    li,
    a {
        all: unset;
    }

    li {
        opacity: 0;
        animation-name: fly-in;
        animation-duration: 200ms;
        animation-fill-mode: forwards;
        animation-timing-function: var(--ease-out-5);
    }

    @keyframes fly-in {
        from {
            opacity: 0;
            transform: translateY(200px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
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
        background-color: var(--sand-11);
        font-family: var(--font-sans);
        padding: 5%;
        gap: 2rem;
    }
</style>
