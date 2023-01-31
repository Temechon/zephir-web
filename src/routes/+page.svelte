<script lang="ts">
    import {
        faBolt,
        faCalendarAlt,
        faCheckCircle,
        faColumns,
        faDashboard,
        faFileAlt,
        faFlag,
        faLink,
        faSearch,
        faWifi,
    } from "@fortawesome/free-solid-svg-icons";
    import Icon from "svelte-awesome";
    import "../app.css";
    import Button from "../gui/button.svelte";
    import Divider from "../gui/divider.svelte";
    import Priceblock from "../gui/priceblock.svelte";
    import pricing from "../data/pricing.json";
</script>

<svelte:head>
    <title>Zephir Project Manager | Un outil de gestion de projet</title>
</svelte:head>

<div class="h-1 bg-gradient-to-r from-darker to-[#0697F2]" />

<div class="w-5/6 m-auto px-12">
    <!-- Header -->
    <div class="mt-12 sm:mb-16 w-5/6 mx-auto px-4 lg:px-0">
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
                    <Icon data={faBolt} slot="icon" class="mr-2" />
                </Button>
            </div>
        </div>
    </div>

    <!-- First section -->
    <section class="flex flex-col items-center lg:flex-row m-auto">
        <!-- Text -->
        <div class="w-full lg:w-1/2 p-12 pr-24">
            <h1 class="font-extrabold text-5xl mb-8">
                Toutes les informations <br />
                de vos projets
                <span class="text-primary-500">à un seul endroit !</span>
            </h1>
            <div class="mb-8 text-xl text-justify">
                Vos comptes rendus, vos jalons, la liste de vos interlocuteurs,
                vos identifiants de connexion, les tâches à faire, la
                documentation, les actions à suivre...
            </div>

            <h2 class="font-semibold text-3xl uppercase mb-8">
                Laissez <span class="text-primary-500">Zephir</span> être votre
                <span class="font-bold text-primary-500 whitespace-nowrap"
                    >seconde mémoire !</span
                >
            </h2>
            <div class="text-center">
                <Button text="Testez maintenant !">
                    <Icon data={faBolt} slot="icon" class="mr-2" />
                </Button>
                <div class="italic text-gray-400 mt-2">
                    Et sans inscription !
                </div>
            </div>
        </div>
        <!-- Image -->
        <div class="w-full lg:w-1/2 md:p-12 lg:p-0">
            <img
                src="https://placekitten.com/640/400"
                alt=""
                srcset=""
                class="object-cover w-full"
            />
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
            <h1 class="font-semibold text-4xl mb-8">
                N'oubliez plus les actions <br />en cours sur vos projets
            </h1>
            <p class="w-full md:w-1/2 lg:w-5/6 m-auto text-xl text-justify">
                Suivez les actions en cours dans le cadre de vos projets :
                tâches à effectuer, demandes en attentes auprès d’un
                prestataire, incident en cours de correction... <br />
                <span class="font-semibold text-primary-500"
                    >D’un coup d’œil, visualisez l’avancement et les personnes à
                    relancer.</span
                >
            </p>
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
            <h2 class="font-semibold text-4xl mb-8">
                Ayez une vue d’ensemble de votre portefeuille
            </h2>
            <p class="w-full md:w-1/2 lg:w-5/6 m-auto text-xl text-justify">
                Ayez une vue d’ensemble sur toutes les actions de vos projets
                via un tableau Kanban, ou trouvez rapidement les informations
                que vous recherchez parmi TOUS les projets.
            </p>
        </div>
    </section>

    <Divider />
    <section class="w-5/6 m-auto">
        <h1 class="text-center text-4xl font-semibold mb-12">
            Un outil ultra rapide qui vous fait gagner du temps
        </h1>
        <div class="grid grid-cols-3 gap-4">
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faFileAlt} scale="3" class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Comptes rendus</h2>
                <p class="text-justify text-lg">
                    Rédigez des comptes-rendus de réunions directement dans
                    Zephir, avec la possibilité d'y inclure des images et la
                    liste des participants. Les comptes rendus sont
                    automatiquement liés au projet concerné, et transférables
                    par email aux participants.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faBolt} scale="3" class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">
                    Liste des actions en cours
                </h2>
                <p class="text-justify text-lg">
                    Ayez une vue d'ensemble sur toutes les actions de tous les
                    projets en cours, pour ne plus rien oublier. Visualisez les
                    actions à relancer, à communiquer en comité de pilotage ou à
                    faire avancer de votre côté.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faFlag} scale="3" class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Jalons</h2>
                <p class="text-justify text-lg">
                    Définissez des étapes clés pour votre projet, comme les
                    échéances pour les livrables, les réunions et les
                    événements.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faWifi} scale="3" class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Utilisable offline</h2>
                <p class="text-justify text-lg">
                    Avec Zephir, les données liées à vos projets sont
                    entièrement sur votre ordinateur. <b
                        >L'application peut donc être entièrement utilisée
                        offline !</b
                    > Même sans réseau entre deux réunions, vous pouvez continuer
                    à travailler en toute sécurité.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faSearch} scale="3" class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Recherche transverse</h2>
                <p class="text-justify text-lg">
                    Trouvez rapidement les informations que vous recherchez
                    parmi tous les projet, les notes, les comptes-rendus de
                    réunions, les actions à suivre...
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faLink} scale="3" class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Liens utiles</h2>
                <p class="text-justify text-lg">
                    Accédez rapidement et facilement à tous les documents et les
                    ressources externes liés à votre projet, comme les plans,
                    les documents de référence, les images, les vidéos, etc.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faColumns} scale="3" class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Tableau Kanban</h2>
                <p class="text-justify text-lg">
                    Toutes vos tâches à faire sont triées dans un tableau kanban
                    . Elles peuvent être liées à des actions en cours, des
                    compte rendus, et evidemment à vos projets.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faDashboard} scale="3" class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Tableau de bord</h2>
                <p class="text-justify text-lg">
                    Pour chaque projet, un tableau de bord résume ce que vous
                    avez à faire d'urgent : envoyer un compte rendu, communiquer
                    certains points, ou faire des tâches dans les 2 semaines.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon
                    data={faCalendarAlt}
                    scale="3"
                    class="text-primary mb-4"
                />
                <h2 class="font-semibold text-xl mb-4">Calendrier global</h2>
                <p class="text-justify text-lg">
                    Un calendrier reprend toutes les dates limites de vos tâches
                    à faire ainsi que l'ensemble des jalons des projets.
                </p>
            </div>
        </div>
    </section>
    <Divider />

    <section class="w-5/6 m-auto">
        <h1 class="text-center text-4xl font-semibold mb-12">
            Choisissez comment vous voulez l'utiliser
        </h1>
        <div class="flex flex-row items-center justify-center gap-10">
            <Button text="Mode web" />
            <Button text="Mode exécutable" />
        </div>

        <!-- Pricing -->
        <div class="flex flex-row items-center justify-center gap-10 mt-12">
            <Priceblock
                baseline="Sans synchronisation"
                price="Gratuit"
                args={pricing.web.free}
            />
            <!-- Price block - avec synchro -->
            <Priceblock
                baseline="Avec synchronisation"
                price="6€/mois"
                args={pricing.web.synchro}
            />
        </div>
    </section>
</div>

<footer class="bg-darker h-52 mt-24" />
