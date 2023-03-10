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
                        Fonctionnalit√©s
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
                <span class="text-primary-500">√† un seul endroit !</span>
            </h1>
            <div class="mb-8 text-xl text-justify">
                Zephir est un <b
                    >outil de suivi de portefeuille projets ultra r√©actif</b
                > qui permet de stocker toutes les informations li√©es √† vos projets
                : vos comptes rendus, vos jalons, la liste de vos interlocuteurs,
                vos identifiants de connexion, les t√Ęches √† faire, la documentation,
                les actions √† suivre... Ne vous demandez plus o√Ļ chercher les informations,
                tout est l√†.
            </div>

            <h2 class="font-semibold text-3xl uppercase mb-8 text-center">
                Laissez <span class="text-primary-500">Zephir</span> √™tre votre
                <span class="font-bold text-primary-500 whitespace-nowrap"
                    >seconde m√©moire !</span
                >
            </h2>
            <div class="text-center">
                <a
                    href="#"
                    on:click={() => scrollto("features")}
                    aria-label="features"
                >
                    <Button text="Aller voir les fonctionnalit√©s">
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
                t√Ęches √† effectuer, demandes en attentes aupr√®s d‚Äôun
                prestataire, incident en cours de correction... <br />
                <span class="font-semibold text-primary-500"
                    >D‚Äôun coup d‚ÄôŇďil, visualisez l‚Äôavancement et les personnes √†
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
                Ayez une vue d‚Äôensemble de votre portefeuille
            </h2>
            <p class="w-full m-auto text-xl text-justify">
                Ayez une vue d‚Äôensemble sur toutes les actions de vos projets
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
                    R√©digez des comptes-rendus de r√©unions directement dans
                    Zephir, avec la possibilit√© d'y inclure des images et la
                    liste des participants. Les comptes rendus sont
                    automatiquement li√©s au projet concern√©, et transf√©rables
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
                    actions √† relancer, √† communiquer en comit√© de pilotage ou √†
                    faire avancer de votre c√īt√©.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faFlag} scale={3} class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Jalons</h2>
                <p class="text-justify text-lg">
                    D√©finissez des √©tapes cl√©s pour votre projet, comme les
                    √©ch√©ances pour les livrables, les r√©unions et les
                    √©v√©nements.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faWifi} scale={3} class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Utilisable offline</h2>
                <p class="text-justify text-lg">
                    Avec Zephir, les donn√©es li√©es √† vos projets sont
                    enti√®rement sur votre ordinateur. <b
                        >L'application peut donc √™tre enti√®rement utilis√©e
                        offline !</b
                    > M√™me sans r√©seau entre deux r√©unions, vous pouvez continuer
                    √† travailler en toute s√©curit√©.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faSearch} scale={3} class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Recherche transverse</h2>
                <p class="text-justify text-lg">
                    Trouvez rapidement les informations que vous recherchez
                    parmi tous les projet, les notes, les comptes-rendus de
                    r√©unions, les actions √† suivre...
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faLink} scale={3} class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Liens utiles</h2>
                <p class="text-justify text-lg">
                    Acc√©dez rapidement et facilement √† tous les documents et les
                    ressources externes li√©s √† votre projet, comme les plans,
                    les documents de r√©f√©rence, les images, les vid√©os, etc.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faColumns} scale={3} class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Tableau Kanban</h2>
                <p class="text-justify text-lg">
                    Toutes vos t√Ęches √† faire sont tri√©es dans un tableau kanban
                    . Elles peuvent √™tre li√©es √† des actions en cours, des
                    compte rendus, et evidemment √† vos projets.
                </p>
            </div>
            <!-- Item -->
            <div class="flex items-center flex-col p-4">
                <Icon data={faDashboard} scale={3} class="text-primary mb-4" />
                <h2 class="font-semibold text-xl mb-4">Tableau de bord</h2>
                <p class="text-justify text-lg">
                    Pour chaque projet, un tableau de bord r√©sume ce que vous
                    avez √† faire d'urgent : envoyer un compte rendu, communiquer
                    certains points, ou faire des t√Ęches dans les 2 semaines.
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
                    Un calendrier reprend toutes les dates limites de vos t√Ęches
                    √† faire ainsi que l'ensemble des jalons des projets.
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
                vos donn√©es dans le cloud.
            {:else}
                T√©l√©chargez l'√©xecutable Windows <b>Zephir Desktop</b>, pour
                cr√©er un espace prot√©g√© sur votre PC o√Ļ vos donn√©es seront
                sauvegard√©es de fa√ßon s√©curis√©e. Si vous le choisissez, il est
                √©galement possible de sauvegarder vos donn√©es dans le cloud.
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
                    subprice="√† venir..."
                    args={pricing.web.synchro}
                    color="red"
                />
            {:else}
                <Priceblock
                    baseline="Sans synchronisation"
                    price="30‚ā¨"
                    args={pricing.standalone.nosync}
                    color="blue"
                    cta="Acheter !"
                    url="https://pixelcodr.lemonsqueezy.com/checkout/buy/9796c5a4-130e-4908-ad4b-ccb1520eb437?logo=0&discount=0"
                />
                <!-- Price block - avec synchro -->
                <Priceblock
                    baseline="Avec synchronisation"
                    subprice="√† venir..."
                    args={pricing.standalone.sync}
                    color="blue"
                />
            {/if}
        </div>
    </section>
    <Divider />

    <section class="md:px-12 xl:px-24 m-auto" id="faq">
        <h1 class="text-center text-4xl font-semibold mb-12">
            Questions fr√©quentes
        </h1>

        <ul>
            <li class="border-navy-100 py-8 border-b">
                <div class="text-2xl font-semibold mb-4">
                    C'est quoi Zephir ?
                </div>
                <div class="text-lg">
                    <p>
                        Zephir Project Manager est un outil de suivi de projets.
                        Il permet de stocker de mani√®re centralis√©e toutes les
                        informations importantes, telles que les t√Ęches √†
                        accomplir, les actions en cours, les comptes rendus de
                        r√©unions, les liens utiles, et les acteurs impliqu√©s
                        dans vos projet. <br /> Il est design√© pour √™tre
                        <b>ultra rapide, r√©actif et sans bug.</b>
                    </p>
                </div>
            </li>
            <li class="border-navy-100 py-8 border-b">
                <div class="text-2xl font-semibold mb-4">
                    Comment √ßa marche ?
                </div>
                <div class="text-lg">
                    <p>
                        Avec Zephir, l'ensemble de vos donn√©es est stock√©e dans
                        la base de donn√©es du navigateur (appel√©e Indexed DB).<br
                        />
                        L'avantage de ce syst√®me est triple :
                    </p>
                    <ol class="list-decimal px-12 my-4">
                        <li>
                            Vos donn√©es ne quittent <b>jamais</b> votre PC, sauf
                            si la synchronisation est activ√©e.
                        </li>
                        <li>
                            Elles sont enti√®rement accessibles hors-ligne. Cela
                            veut dire que Zephir Web, une fois charg√©e dans
                            votre navigateur, peut fonctionner enti√®rement sans
                            connexion internet. C'est √©videmment la m√™me chose
                            avec Zephir Desktop :)
                        </li>
                        <li>
                            Les √©changes avec Indexed DB sont tr√®s rapides. De
                            fait, l'application est ultra r√©active : pas besoin
                            de bouton "sauvegarder", tout est sauvegard√© en
                            continu
                        </li>
                    </ol>
                    <p>
                        Evidemment, il y a quelques inconv√©nients : sans
                        synchronisation, et si le cache de votre navigateur est
                        vid√©, vos donn√©es sont effac√©es avec. <br />
                        Heureusement, en mode ex√©cutable, Zephir PM dispose de son
                        propre cache ind√©pendant de votre navigateur web. Pas de
                        risque de perdre vos donn√©es !
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
