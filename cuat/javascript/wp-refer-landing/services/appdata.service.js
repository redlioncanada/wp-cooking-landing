System.register(['angular2/core', './logger.service.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logger_service_1;
    var AppData;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            AppData = (function () {
                function AppData(logger) {
                    this.logger = logger;
                    this.language = this.getLanguage();
                    this.contents = {};
                    this.contents.en = {
                        masthead: {
                            enabled: true,
                            image: "/images/wp-refer-landing/refer-landing-masthead.jpg",
                            alt: "Kitchen",
                            title: ""
                        },
                        banner: {
                            enabled: true,
                            link: 'http://www.whirlpool.ca/en_CA/everydaycare/',
                            image: '/images/wp-refer-landing/banner.jpg',
                            alt: 'Father and Daughter',
                            ctaText: 'Learn More'
                        },
                        features: {
                            enabled: true,
                            features: [
                                {
                                    image: "/images/wp-refer-landing/refer-landing-shopping-cart.png",
                                    title: "Buying Guide",
                                    alt: "Buying guide",
                                    desc: "What to look for when buying",
                                    cta: "Click Here",
                                    link: "http://blog.whirlpool.ca/whirlpool-refrigerator-buying-guide/",
                                    type: "cart"
                                },
                                {
                                    image: "/images/wp-refer-landing/refer-landing-star.png",
                                    title: "Ratings and Reviews",
                                    alt: "Ratings and reviews",
                                    desc: "See what others are saying",
                                    cta: "Click Here",
                                    link: "http://www.whirlpool.ca/en_CA/2_3_90/jump-pages_best-products.content.html",
                                    type: "star"
                                },
                                {
                                    image: "/images/wp-refer-landing/refer-landing-mag-glass.png",
                                    title: "Find Your Whirlpool",
                                    alt: "Find your Whirlpool",
                                    desc: "Need help finding your refrigerator?",
                                    cta: "Click Here",
                                    link: "http://findmy.whirlpool.ca",
                                    type: "magnifier"
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "Additional Features",
                            features: [
                                {
                                    title: "Additional Accessories",
                                    image: "/images/wp-refer-landing/more-features-1.jpg",
                                    link: "http://www.whirlpool.ca/en_CA/Accessories-1/Accessories_Kitchen_Accessories_Refrigerator-3/102280119/",
                                    alt: "Refrigerator exterior",
                                    text: "",
                                    cta: ""
                                },
                                {
                                    title: "Water Filtration",
                                    image: "/images/wp-refer-landing/more-features-2.jpg",
                                    link: "http://www.whirlpool.ca/en_CA/2_3_80/jump-pages_water-filters.content.html",
                                    alt: "Refrigerator exterior",
                                    text: "",
                                    cta: ""
                                },
                                {
                                    title: "Certified Care",
                                    image: "/images/wp-refer-landing/more-features-3.jpg",
                                    link: "https://whirlpoolcertifiedcare.ca/en",
                                    alt: "Refrigerator exterior",
                                    text: "",
                                    cta: ""
                                }
                            ]
                        },
                        videoplayer: {
                            enabled: true,
                            title: "Must-See Innovation",
                            videos: [
                                {
                                    id: '8uqalJESFos',
                                    thumb: '/images/wp-refer-landing/video-select-1.jpg',
                                    title: 'Perfect Places<sup>&trade;</sup>',
                                    alt: "Full Refrigerator",
                                    ctaTitle: 'Perfect Places<sup>&trade;</sup>',
                                    cta: 'Play Video',
                                    desc: false
                                },
                                {
                                    id: 'xI986ew0VD0',
                                    thumb: '/images/wp-refer-landing/video-select-2.jpg',
                                    title: 'Resource Saver<sup>&trade;</sup> & EasyView<sup>&trade;</sup>',
                                    alt: "Refrigerator Exterior",
                                    ctaTitle: 'Resource Saver<sup>&trade;</sup> & EasyView<sup>&trade;</sup>',
                                    cta: 'Play Video',
                                    desc: false,
                                },
                                {
                                    id: 'j-SeXWbpEaw',
                                    thumb: '/images/wp-refer-landing/video-select-3.jpg',
                                    title: 'StoreRight<sup>&trade;</sup> System',
                                    alt: "Full Refrigerator Drawer",
                                    ctaTitle: 'StoreRight<sup>&trade;</sup> System',
                                    cta: 'Play Video',
                                    desc: false
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Choose Your Style',
                            nav: {
                                text: 'See<br/>All',
                                link: 'http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back'
                            },
                            products: [
                                {
                                    image: "/images/wp-refer-landing/products/double-drawer.png",
                                    title: "Double Drawer",
                                    alt: "5-Door Refrigerator ",
                                    desc: "Get even more organized with our versatile Double Drawer refrigerator, designed with your family's needs in mind. This unique style offers 9 storage zones with our PerfectPlaces™ System, including our temperature-controlled drawer and small items bin.",
                                    link: "http://www.whirlpool.ca/en_CA/kitchen-1/refrigeration-2/refrigerators-3/-[WRV986FDEM]-5552596/WRV986FDEM/",
                                    id: "double-drawer",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "/images/wp-refer-landing/products/french-door.png",
                                    title: "French Door",
                                    alt: "French-door refrigerator with bottom freezer and exterior ice dispensor",
                                    desc: "Our French Door refrigerators offer the flexible organization and convenience to keep your fresh foods at eye level and easily store your frozen favourites. The premium look and optimal capacity make these refrigerators an ideal piece for your family's kitchen.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/",
                                    id: "french-door",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "/images/wp-refer-landing/products/side-by-side.png",
                                    title: "Side-by-Side",
                                    alt: "French-door refrigerator ",
                                    desc: "Learn all the ways more door bin space makes it easy for your family to organize and access items big or small. This classic style offers a great balance of space for both fresh and frozen foods with the flexibility for different size options.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110369/",
                                    id: "side-by-side",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "/images/wp-refer-landing/products/bottom-freezer.png",
                                    title: "Bottom Freezer",
                                    alt: "Single door refrigerator with bottom freezer",
                                    desc: "See how convenient it is to reach fresh foods and after-school snacks on the go. You have the option of pull-out drawer or swing-door style freezers, plus a variety of sizes to fit any space in your home.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110370/",
                                    id: "bottom-freezer",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "/images/wp-refer-landing/products/top-freezer.png",
                                    title: "Top Freezer",
                                    alt: "Single door refrigerator with top freezer",
                                    desc: "There's always a place for fresh and frozen favourites inside this simple, classic style. Our Top Freezer refrigerator offers great quality and value and is available in smaller sizes for use as second one when you need the extra space.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110371/",
                                    id: "top-freezer",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "/images/wp-refer-landing/products/freezer.png",
                                    title: "Freezers",
                                    alt: "Freezer",
                                    desc: "See all the extra storage for frozen foods, from pizza to popsicles. Our chest and upright styles ensure the perfect fit for any home.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Freezers-3/102280030/",
                                    id: "freezers",
                                    ctaText: "Learn More"
                                }
                            ]
                        }
                    };
                    this.contents.fr = {
                        masthead: {
                            enabled: true,
                            image: "/images/wp-refer-landing/refer-landing-masthead-fr.jpg",
                            alt: "Cuisine",
                            title: ""
                        },
                        banner: {
                            enabled: true,
                            link: 'http://www.whirlpool.ca/fr_CA/everydaycare/',
                            image: '/images/wp-refer-landing/banner_fr.jpg',
                            alt: 'Père et fille',
                            ctaText: 'En savoir plus'
                        },
                        features: {
                            enabled: true,
                            features: [
                                {
                                    image: "/images/wp-refer-landing/refer-landing-shopping-cart.png",
                                    title: "Guide D'achat",
                                    desc: "Éléments à considérer lorsque vous magasinez",
                                    alt: "Guide d’achat",
                                    cta: "Cliquez ici",
                                    link: "/other-assets/fr_CA/pdf/Refer-Buying-Guide-WP-FR.pdf",
                                    type: "cart"
                                },
                                {
                                    image: "/images/wp-refer-landing/refer-landing-star.png",
                                    title: "Classements et Évaluations",
                                    desc: "Voyez ce que les autres clients en disent",
                                    alt: "Évaluations et commentaires",
                                    cta: "Cliquez ici",
                                    link: "http://www.whirlpool.ca/fr_CA/2_3_90/jump-pages_best-products.content.html",
                                    type: "star"
                                },
                                {
                                    image: "/images/wp-refer-landing/refer-landing-mag-glass.png",
                                    title: "Trouvez Votre Électroménager Whirlpool",
                                    desc: "Vous avez besoin d'aide pour trouver un réfrigérateur?",
                                    alt: "Trouver votre électroménager Whirlpool",
                                    cta: "Cliquez ici",
                                    link: "http://trouvermon.whirlpool.ca",
                                    type: "magnifier"
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "Fonctions supplémentaires",
                            features: [
                                {
                                    title: "Accessoires supplémentaires",
                                    image: "/images/wp-refer-landing/more-features-1.jpg",
                                    link: "http://www.whirlpool.ca/fr_CA/Accessories-1/Accessories_Kitchen_Accessories_Refrigerator-3/102280119/",
                                    alt: "Réfrigérateur extérieur",
                                    text: "",
                                    cta: ""
                                },
                                {
                                    title: "Filtres à eau",
                                    image: "/images/wp-refer-landing/more-features-2.jpg",
                                    link: "http://www.whirlpool.ca/fr_CA/2_3_80/jump-pages_water-filters.content.html",
                                    alt: "Réfrigérateur extérieur",
                                    text: "",
                                    cta: ""
                                },
                                {
                                    title: "Entretien autorisé",
                                    image: "/images/wp-refer-landing/more-features-3.jpg",
                                    link: "https://whirlpoolcertifiedcare.ca/fr",
                                    alt: "Réfrigérateur extérieur",
                                    text: "",
                                    cta: ""
                                }
                            ]
                        },
                        videoplayer: {
                            enabled: true,
                            title: "Innovation à voir absolument",
                            videos: [
                                {
                                    image: '/images/wp-refer-landing/video-thumb-1.jpg',
                                    thumb: '/images/wp-refer-landing/video-select-1.jpg',
                                    title: 'Système de rangement Perfect Places<sup>&trade;</sup>',
                                    ctaTitle: 'Système de rangement Perfect Places™<sup>&trade;</sup>',
                                    alt: "Réfrigérateur complet",
                                    cta: 'Voir',
                                    desc: 'La conception Whirlpool à double tiroir  offre cinq zones de rangement uniques pour mieux organiser vos articles. Il s\'agit de notre réfrigérateur le plus flexible à ce jour.'
                                },
                                {
                                    image: '/images/wp-refer-landing/video-thumb-2.jpg',
                                    thumb: '/images/wp-refer-landing/video-select-2.jpg',
                                    title: 'Fonctions Resource Saver<sup>&trade;</sup> et EasyView<sup>&trade;</sup>',
                                    ctaTitle: 'Fonctions Resource Saver<sup>&trade;</sup><br/>et EasyView<sup>&trade;</sup>',
                                    alt: "Réfrigérateur extérieur",
                                    cta: 'Voir',
                                    desc: 'Les réfrigérateurs les plus efficaces de l’industrie dans leur catégorie respective. Augmentez la souplesse de rangement de votre réfrigérateur et préservez la fraîcheur et le bon goût de vos fruits et légumes grâce au système de bacs à légumes triples EasyView™. Désormais, vous pouvez facilement accéder aux aliments grâce à la visibilité totale à travers le bac à légumes. De plus, vous pourrez ranger une grande variété d\'articles grâce aux trois tiroirs. Le contrôle automatique d\'humidité contribue également à maintenir la fraîcheur.',
                                },
                                {
                                    image: '/images/wp-refer-landing/video-thumb-3.jpg',
                                    thumb: '/images/wp-refer-landing/video-select-3.jpg',
                                    title: 'Système de rangement StoreRight<sup>&trade;</sup>',
                                    ctaTitle: 'Système de rangement StoreRight<sup>&trade;</sup>',
                                    alt: "Tiroir de réfrigérateur complet",
                                    cta: 'Voir',
                                    desc: 'Le système de rangement StoreRight™ préserve la fraîcheur des aliments et réduit les brûlures de congélation, grâce à une technologie de refroidissement perfectionnée et ajuste automatiquement les niveaux d\'humidité.'
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Choisissez votre style',
                            nav: {
                                text: 'Tout<br/>Voir',
                                link: 'http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back'
                            },
                            products: [
                                {
                                    image: "/images/wp-refer-landing/products/double-drawer.png",
                                    title: "Tiroir double",
                                    desc: "Devenez le champion de l’organisation grâce à notre réfrigérateur polyvalent à double tiroir, conçu pour tous les besoins de votre famille. Son style unique offre 9 espaces de rangement, optimisés par notre système PerfectPlaces™, avec le tiroir à température contrôlée et le bac pour petits articles.",
                                    link: "http://www.whirlpool.ca/fr_CA/kitchen-1/refrigeration-2/refrigerators-3/-%5BWRV986FDEM%5D-5552596/WRV986FDEM/",
                                    alt: "Réfrigérateur à 5 portes",
                                    id: "double-drawer",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "/images/wp-refer-landing/products/french-door.png",
                                    title: "Portes françaises",
                                    desc: "Nos réfrigérateurs à portes françaises procurent un rangement polyvalent, maintiennent vos produits frais à hauteur des yeux et vous permettent de conserver facilement vos produits congelés favoris. Leur élégance et capacité optimale font de ces réfrigérateurs un élément idéal de votre cuisine familiale.",
                                    link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back",
                                    alt: "Réfrigérateur à portes françaises à congélateur inférieur et distributeur de glaçons extérieur",
                                    id: "french-door",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "/images/wp-refer-landing/products/side-by-side.png",
                                    title: "Côte à côte",
                                    desc: "Découvrez l’avantage d’un espace supplémentaire dans les balconnets de porte qui facilitent le rangement et l'accès aux petits ou grands articles. Ce style classique offre un rangement parfaitement équilibré entre les aliments frais et surgelés, avec la possibilité de choisir différentes tailles.",
                                    link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back",
                                    alt: "Réfrigérateur à portes françaises",
                                    id: "side-by-side",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "/images/wp-refer-landing/products/bottom-freezer.png",
                                    title: "Congélateur inférieur",
                                    desc: "Bénéficiez d’un accès pratique aux aliments frais et aux collations sur le pouce ou après l'école. Vous avez le choix entre le congélateur-tiroir ou à porte, ainsi qu'une variété de tailles s'agençant à tout espace de votre maison.",
                                    link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023/",
                                    alt: "Réfrigérateur à porte simple avec congélateur inférieur",
                                    id: "bottom-freezer",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "/images/wp-refer-landing/products/top-freezer.png",
                                    title: "Congélateur supérieur",
                                    desc: "Il y aura toujours une place pour vos aliments frais ou surgelés favoris dans ce réfrigérateur au style simple et classique à la fois. Notre réfrigérateur à congélateur supérieur offre un excellent rapport qualité/prix et est aussi disponible en tailles plus petites.",
                                    link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023/",
                                    alt: "Réfrigérateur à porte simple avec congélateur supérieur",
                                    id: "top-freezer",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "/images/wp-refer-landing/products/freezer.png",
                                    title: "Congélateurs",
                                    desc: "Découvrez tout l'espace supplémentaire pour les aliments congelés, tels que les pizzas ou les suçons glacées. Nos modèles horizontaux ou verticaux assurent l'ajustement idéal pour tout espace.",
                                    link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Freezers-3/102280030/",
                                    alt: "Congélateur",
                                    id: "freezers",
                                    ctaText: "En savoir plus"
                                }
                            ]
                        }
                    };
                }
                AppData.prototype.get = function () {
                    if (!(this.language in this.contents)) {
                        this.logger.error('Language does not exist');
                    }
                    return this.contents[this.language];
                };
                AppData.prototype.getLanguage = function () {
                    var url = window.location.href;
                    if (url.indexOf('/fr_CA') > -1)
                        return 'fr';
                    return 'en';
                };
                AppData = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.Logger])
                ], AppData);
                return AppData;
            }());
            exports_1("AppData", AppData);
        }
    }
});
//# sourceMappingURL=appdata.service.js.map