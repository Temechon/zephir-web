<script lang="ts">
    import "../app.css";
    import Button from "../gui/button.svelte";
    import Icon from "svelte-awesome";
    import bolt from "svelte-awesome/icons/bolt";
    import Divider from "../gui/divider.svelte";
</script>

<svelte:head>
    <title>Zephir Project Manager | Un outil de gestion de projet</title>
</svelte:head>

<div class="h-2 bg-gradient-to-r from-darker to-[#0697F2]" />

<div class="w-full xl:w-5/6 m-auto px-12">
    <!-- Header -->
    <div class="mt-12 sm:mb-16 mx-auto lg:w-5/6 px-4 lg:px-0">
        <div
            class="flex flex-col sm:flex-row items-center justify-around lg:justify-center"
        >
            <!-- Logo -->
            <img class="w-96 mb-4" src="logo.png" alt="" srcset="" />

            <!-- Top menu -->
            <div
                class="ml-auto w-1/2 flex-row justify-evenly items-center hidden lg:flex"
            >
                <div
                    class="cursor-pointer transition-all duration-200 font-light text-xl hover:text-primary-500 hover:border-primary-500 border-transparent border-b-4 py-2"
                >
                    Fonctionnalités
                </div>
                <div
                    class="cursor-pointer transition-all duration-200 font-light text-xl hover:text-primary-500 hover:border-primary-500 border-transparent border-b-4 py-2"
                >
                    Pricing
                </div>
                <div
                    class="cursor-pointer transition-all duration-200 font-light text-xl hover:text-primary-500 hover:border-primary-500 border-transparent border-b-4 py-2"
                >
                    FAQ
                </div>
            </div>

            <div class="py-2 min-w-fit">
                <Button text="Testez gratuitement !">
                    <Icon data={bolt} slot="icon" />
                </Button>
            </div>
        </div>
    </div>

    <!-- First section -->
    <section class="flex flex-col items-center lg:flex-row">
        <!-- Text -->
        <div class="w-full lg:w-1/2 p-12 pr-24">
            <div class="font-extrabold text-5xl mb-8">
                Toutes les informations <br />
                de vos projets
                <span class="text-primary-500">à un seul endroit !</span>
            </div>
            <div class="mb-8 text-xl">
                Vos comptes rendus, vos jalons, la liste de vos interlocuteurs,
                vos identifiants de connexion, les tâches à faire, la
                documentation, les actions à suivre...
            </div>

            <div class="font-semibold text-3xl uppercase mb-8">
                Laissez <span class="text-primary-500">Zephir</span> être votre
                <span class="font-bold text-primary-500 whitespace-nowrap"
                    >seconde mémoire !</span
                >
            </div>
            <div class="text-center">
                <Button text="Testez maintenant !">
                    <Icon data={bolt} slot="icon" />
                </Button>
                <div class="italic text-gray-400 mt-2">
                    Et sans inscription !
                </div>
            </div>
        </div>
        <!-- Image -->
        <div class="w-full lg:w-1/2 md:p-12 lg:p-0">
            <img src="https://placekitten.com/640/400" alt="" srcset="" />
        </div>
    </section>

    <Divider />

    <!-- Second section -->
    <section class="flex flex-col items-center lg:flex-row w-5/6 m-auto">
        <div class="w-full lg:w-1/2 md:p-12 lg:p-0">
            <img src="https://placekitten.com/600/400" alt="" srcset="" />
        </div>
        <!-- Text -->
        <div class="w-full lg:w-1/2 text-center p-12">
            <div class="font-semibold text-4xl mb-8">
                N'oubliez plus les actions <br />en cours sur vos projets
            </div>
            <div class="w-full md:w-1/2 lg:w-5/6 m-auto text-xl text-justify">
                Suivez les actions en cours dans le cadre de vos projets :
                tâches à effectuer, demandes en attentes auprès d’un
                prestataire, incident en cours de correction... <br />
                <span class="font-semibold text-primary-500"
                    >D’un coup d’œil, visualisez l’avancement et les personnes à
                    relancer.</span
                >
            </div>
        </div>
    </section>

    <Divider />

    <!-- Third section -->
    <section
        class="flex flex-col-reverse items-center lg:flex-row-reverse w-5/6 m-auto"
    >
        <div class="w-full lg:w-1/2 md:p-12 lg:p-0">
            <img src="https://placekitten.com/600/400" alt="" srcset="" />
        </div>
        <!-- Text -->
        <div class="w-full lg:w-1/2 text-center p-12">
            <div class="font-semibold text-4xl mb-8">
                Ayez une vue d’ensemble de votre portefeuille
            </div>
            <div class="w-full md:w-1/2 lg:w-5/6 m-auto text-xl text-justify">
                Ayez une vue d’ensemble sur toutes les actions de vos projets
                via un tableau Kanban, ou trouvez rapidement les informations
                que vous recherchez parmi TOUS les projets.
            </div>
        </div>
    </section>

    <Divider />
</div>

<footer class="bg-darker h-52 mt-24" />
