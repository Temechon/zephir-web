<script lang="ts">
    import "../app.css";
    import Button from "../gui/button/button.svelte";
    import Icon from "svelte-awesome";
    import bolt from "svelte-awesome/icons/bolt";
</script>

<svelte:head>
    <title>Zephir Project Manager | Un outil de gestion de projet</title>
</svelte:head>

<div class="h-2 bg-gradient-to-r from-darker to-[#0697F2]" />

<!-- Header -->
<div class="mt-12 mb-24 mx-auto lg:w-5/6 px-4 lg:px-0">
    <div class="flex flex-row items-center justify-around lg:justify-center">
        <!-- Logo -->
        <img class="w-96" src="logo.png" alt="" srcset="" />

        <!-- Top menu -->
        <div class="w-full flex-row justify-evenly items-center hidden lg:flex">
            <div
                class="cursor-pointer transition-all duration-200 font-semibold text-xl hover:text-primary-500 hover:border-primary-500 border-transparent border-b-4 py-2"
            >
                Fonctionnalités
            </div>
            <div
                class="cursor-pointer transition-all duration-200 font-semibold text-xl hover:text-primary-500 hover:border-primary-500 border-transparent border-b-4 py-2"
            >
                Pricing
            </div>
            <div
                class="cursor-pointer transition-all duration-200 font-semibold text-xl hover:text-primary-500 hover:border-primary-500 border-transparent border-b-4 py-2"
            >
                FAQ
            </div>
        </div>

        <div class="py-2 min-w-fit">
            <Button text="Tester gratuitement !">
                <Icon data={bolt} slot="icon" />
            </Button>
        </div>
    </div>
</div>

<section class="flex flex-col mx-12 items-center xl:flex-row ">
    <!-- Text -->
    <div class="w-full xl:w-1/2 text-center p-6">
        <div class="font-semibold text-3xl mb-12">
            Toutes vos informations à un seul endroit !
        </div>
        <div class="w-full md:w-1/2 xl:w-5/6 m-auto mb-4">
            Vos comptes rendus, vos jalons, la liste de vos interlocuteurs, vos
            identifiants de connexion, les tâches à faire, les actions à
            suivre...
        </div>

        <div
            class="w-full md:w-1/2 xl:w-5/6 m-auto font-semibold text-2xl text-primary-500 uppercase "
        >
            Laissez Zephir être votre seconde mémoire !
        </div>
    </div>
    <!-- Image -->
    <div class="w-full bg-green-200 xl:w-1/2">image</div>
</section>
