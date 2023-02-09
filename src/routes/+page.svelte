<script lang="ts">
    import {
        faBolt,
        faCalendarAlt,
        faColumns,
        faDashboard,
        faDiagramProject,
        faFileAlt,
        faFlag,
        faFlask,
        faLink,
        faSearch,
        faWifi,
    } from "@fortawesome/free-solid-svg-icons";
    import Icon from "svelte-awesome";
    import "../app.css";
    import pricing from "../data/pricing.json";
    import Button from "../gui/button.svelte";
    import Divider from "../gui/divider.svelte";
    import Priceblock from "../gui/priceblock.svelte";
    import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

    let showweb = false;

    function scrollto(anchorid: string) {
        const anchor = document.getElementById(anchorid);
        window.scrollTo({
            top: anchor?.offsetTop,
            behavior: "smooth",
        });
    }

    // TODO
    // https://github.com/kaisermann/svelte-i18n/blob/main/docs/Svelte-Kit.md
</script>

<svelte:head>
    <title>Zephir Project Manager | Un outil de gestion de projet</title>
</svelte:head>

<div class="h-1 bg-gradient-to-r from-darker to-[#0697F2]" />

<div class="w-5/6 m-auto">
    <!-- Header -->
    <div class="mt-12 sm:mb-16 w-5/6 mx-auto px-4 lg:px-0">
        <div
            class="flex flex-col sm:flex-row items-center justify-around lg:justify-center"
        >
            <!-- Logo -->
            <img class="w-96 mb-4" src="logo.png" alt="logo zephir" srcset="" />

            <!-- Top menu -->
            <div
                class="ml-auto w-1/2 flex-row justify-evenly items-center hidden lg:flex"
            >
                <a
                    href="#"
                    on:click={() => scrollto("features")}
                    aria-label="features"
                >
                    <div
                        class="cursor-pointer transition-all duration-200 font-light text-xl hover:text-primary-500 hover:border-primary-500 border-transparent border-b-4 py-2"
                    >
                        Fonctionnalités
                    </div>
                </a>
                <a
                    href="#"
                    on:click={() => scrollto("pricing")}
                    aria-label="pricing"
                >
                    <div
                        class="cursor-pointer transition-all duration-200 font-light text-xl hover:text-primary-500 hover:border-primary-500 border-transparent border-b-4 py-2"
                    >
                        Pricing
                    </div>
                </a>

                <a href="#" on:click={() => scrollto("faq")} aria-label="faq">
                    <div
                        class="cursor-pointer transition-all duration-200 font-light text-xl hover:text-primary-500 hover:border-primary-500 border-transparent border-b-4 py-2"
                    >
                        FAQ
                    </div>
                </a>
            </div>

            <div class="py-2 min-w-fit">
                <a
                    href="https://app.zephir.pm/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Zephir free version"
                >
                    <Button text="Testez gratuitement !">
                        <Icon data={faFlask} slot="icon" class="mr-2" />
                    </Button>
                </a>
            </div>
        </div>
    </div>

    <!-- First section -->
    <section class="flex flex-col items-center 2xl:flex-row m-auto md:px-12">
        <!-- Text -->
        <div class="w-full 2xl:w-1/2 2xl:p-12 2xl:pr-24 p-4">
            <h1 class="font-extrabold text-5xl mb-8 2xl:text-left text-center">
                Toutes les informations <br />
                de vos projets
                <span class="text-primary-500">à un seul endroit !</span>
            </h1>
            <div class="mb-8 text-xl text-justify">
                Zephir est un <b
                    >outil de suivi de portefeuille projets ultra réactif</b
                > qui permet de stocker toutes les informations liées à vos projets
                : vos comptes rendus, vos jalons, la liste de vos interlocuteurs,
                vos identifiants de connexion, les tâches à faire, la documentation,
                les actions à suivre... Ne vous demandez plus où chercher les informations,
                tout est là.
            </div>

            <h2 class="font-semibold text-3xl uppercase mb-8 text-center">
                Laissez <span class="text-primary-500">Zephir</span> être votre
                <span class="font-bold text-primary-500 whitespace-nowrap"
                    >seconde mémoire !</span
                >
            </h2>
            <div class="text-center">
                <a
                    href="#"
                    on:click={() => scrollto("features")}
                    aria-label="features"
                >
                    <Button text="Aller voir les fonctionnalités">
                        <Icon
                            data={faDiagramProject}
                            slot="icon"
                            class="mr-2"
                        />
                    </Button>
                </a>
            </div>
        </div>
        <!-- Image -->
        <div class="w-full md:w-3/4 2xl:w-1/2">
            <img
                src="images/zephir_projectlist.png"
                alt=""
                srcset=""
                class="object-cover w-full shadow-2xl"
            />
        </div>
    </section>

    <Divider />

    <!-- Second section -->
    <section
        class="flex flex-col items-center xl:flex-row m-auto md:px-12 2xl:px-24"
    >
        <div class="w-full md:w-3/4 xl:w-2/3 2xl:p-12">
            <img
                src="images/zephir_actionlist.png"
                alt=""
                srcset=""
                class="border shadow-2xl"
            />
        </div>
        <!-- Text -->
        <div class="w-full xl:w-1/3 text-center xl:p-12">
            <h1 class="font-semibold text-4xl mb-8 pt-12 xl:pt-0">
                N'oubliez plus les actions en cours sur vos projets
            </h1>
            <p class="w-full m-auto text-xl text-justify">
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
        class="flex flex-col items-center xl:flex-row-reverse m-auto md:px-12 2xl:px-24"
    >
        <div class="w-full md:w-3/4 xl:w-2/3 2xl:p-12">
            <img
                src="images/zephir_kanban.png"
                alt=""
                class="border shadow-2xl"
            />
        </div>
        <!-- Text -->
        <div class="w-full xl:w-1/3 text-center xl:p-12">
            <h2 class="font-semibold text-4xl mb-8 pt-12 xl:pt-0">
                Ayez une vue d’ensemble de votre portefeuille
            </h2>
            <p class="w-full m-auto text-xl text-justify">
                Ayez une vue d’ensemble sur toutes les actions de vos projets
                via un tableau Kanban, ou trouvez rapidement les informations
                que vous recherchez parmi TOUS les projets.
            </p>
        </div>
    </section>

    <Divider />
    <section class="md:px-12 xl:px-24 m-auto" id="features">
        <h1 class="text-center text-4xl font-semibold mb-12">
            Un outil ultra rapide qui vous fait gagner du temps
        </h1>
        <div
            class="grid lg:grid-cols-2 2xl:grid-cols-3 lg:gap-4 grid-cols-1 gap-2"
        >
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faFileAlt} scale={3} class="text-primary mb-4" />
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
                <Icon data={faBolt} scale={3} class="text-primary mb-4" />
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
                <Icon data={faFlag} scale={3} class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Jalons</h2>
                <p class="text-justify text-lg">
                    Définissez des étapes clés pour votre projet, comme les
                    échéances pour les livrables, les réunions et les
                    événements.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faWifi} scale={3} class="text-primary mb-4" />
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
                <Icon data={faSearch} scale={3} class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Recherche transverse</h2>
                <p class="text-justify text-lg">
                    Trouvez rapidement les informations que vous recherchez
                    parmi tous les projet, les notes, les comptes-rendus de
                    réunions, les actions à suivre...
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faLink} scale={3} class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Liens utiles</h2>
                <p class="text-justify text-lg">
                    Accédez rapidement et facilement à tous les documents et les
                    ressources externes liés à votre projet, comme les plans,
                    les documents de référence, les images, les vidéos, etc.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faColumns} scale={3} class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Tableau Kanban</h2>
                <p class="text-justify text-lg">
                    Toutes vos tâches à faire sont triées dans un tableau kanban
                    . Elles peuvent être liées à des actions en cours, des
                    compte rendus, et evidemment à vos projets.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faDashboard} scale={3} class="text-primary mb-4" />
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
                    scale={3}
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

    <section class="md:px-12 xl:px-24 m-auto" id="pricing">
        <h1 class="text-center text-4xl font-semibold mb-12">
            Choisissez comment vous voulez l'utiliser
        </h1>
        <div class="flex flex-row-reverse items-center justify-center gap-10">
            <Button
                text="Zephir web"
                event={() => {
                    showweb = true;
                    console.log(showweb);
                }}
                active={showweb}
            />
            <Button
                text="Zephir Desktop"
                event={() => (showweb = false)}
                active={!showweb}
                color="blue"
            />
        </div>

        <!-- Pricing -->

        <p class="text-center 2xl:w-1/2 m-auto p-12 pb-0 text-lg italic">
            {#if showweb}
                Utilisez <b>Zephir en mode web</b>, avec ou sans sauvegarde de
                vos données dans le cloud.
            {:else}
                Téléchargez l'éxecutable Windows <b>Zephir Desktop</b>, pour
                créer un espace protégé sur votre PC où vos données seront
                sauvegardées de façon sécurisée. Si vous le choisissez, il est
                également possible de sauvegarder vos données dans le cloud.
            {/if}
        </p>
        <div
            class="flex lg:flex-row flex-col items-center justify-center gap-10 mt-12"
        >
            {#if showweb}
                <Priceblock
                    baseline="Sans synchronisation"
                    price="Gratuit"
                    args={pricing.web.free}
                    color="red"
                    cta="Tester maintenant !"
                    url="https://app.zephir.pm"
                />
                <!-- Price block - avec synchro -->
                <Priceblock
                    baseline="Avec synchronisation"
                    subprice="à venir..."
                    args={pricing.web.synchro}
                    color="red"
                />
            {:else}
                <Priceblock
                    baseline="Sans synchronisation"
                    price="30€"
                    args={pricing.standalone.nosync}
                    color="blue"
                    cta="Acheter !"
                    url="https://pixelcodr.lemonsqueezy.com/checkout/buy/9796c5a4-130e-4908-ad4b-ccb1520eb437?logo=0&discount=0"
                />
                <!-- Price block - avec synchro -->
                <Priceblock
                    baseline="Avec synchronisation"
                    subprice="à venir..."
                    args={pricing.standalone.sync}
                    color="blue"
                />
            {/if}
        </div>
    </section>
    <Divider />

    <section class="md:px-12 xl:px-24 m-auto" id="faq">
        <h1 class="text-center text-4xl font-semibold mb-12">
            Questions fréquentes
        </h1>

        <ul>
            <li class="border-navy-100 py-8 border-b">
                <div class="text-2xl font-semibold mb-4">
                    C'est quoi Zephir ?
                </div>
                <div class="text-lg">
                    <p>
                        Zephir Project Manager est un outil de suivi de projets.
                        Il permet de stocker de manière centralisée toutes les
                        informations importantes, telles que les tâches à
                        accomplir, les actions en cours, les comptes rendus de
                        réunions, les liens utiles, et les acteurs impliqués
                        dans vos projet. <br /> Il est designé pour être
                        <b>ultra rapide, réactif et sans bug.</b>
                    </p>
                </div>
            </li>
            <li class="border-navy-100 py-8 border-b">
                <div class="text-2xl font-semibold mb-4">
                    Comment ça marche ?
                </div>
                <div class="text-lg">
                    <p>
                        Avec Zephir, l'ensemble de vos données est stockée dans
                        la base de données du navigateur (appelée Indexed DB).<br
                        />
                        L'avantage de ce système est triple :
                    </p>
                    <ol class="list-decimal px-12 my-4">
                        <li>
                            Vos données ne quittent <b>jamais</b> votre PC, sauf
                            si la synchronisation est activée.
                        </li>
                        <li>
                            Elles sont entièrement accessibles hors-ligne. Cela
                            veut dire que Zephir Web, une fois chargée dans
                            votre navigateur, peut fonctionner entièrement sans
                            connexion internet. C'est évidemment la même chose
                            avec Zephir Desktop :)
                        </li>
                        <li>
                            Les échanges avec Indexed DB sont très rapides. De
                            fait, l'application est ultra réactive : pas besoin
                            de bouton "sauvegarder", tout est sauvegardé en
                            continu
                        </li>
                    </ol>
                    <p>
                        Evidemment, il y a quelques inconvénients : sans
                        synchronisation, et si le cache de votre navigateur est
                        vidé, vos données sont effacées avec. <br />
                        Heureusement, en mode exécutable, Zephir PM dispose de son
                        propre cache indépendant de votre navigateur web. Pas de
                        risque de perdre vos données !
                    </p>
                </div>
            </li>
        </ul>
    </section>
</div>

<footer class="bg-darker mt-24 py-12">
    <div
        class="flex w-5/6 m-auto flex-col lg:flex-row items-center justify-evenly"
    >
        <img class="w-96" src="logo_white.png" alt="logo zephir" srcset="" />
        <div class="text-white/80 hover:text-white">
            <a
                href="https://www.linkedin.com/in/julian-chenard/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
            >
                <Icon data={faLinkedin} scale={2} />
            </a>
        </div>
    </div>
</footer>
