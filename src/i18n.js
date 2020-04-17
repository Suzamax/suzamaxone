import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import mainES from './localization/es/mainpage.js';
import mainEN from './localization/en/mainpage.js';
import skillsES from './localization/es/skills.js';
import skillsEN from './localization/en/skills.js';
import cvES from './localization/es/cv.js';
import cvEN from './localization/en/cv.js';
import aboutES from './localization/es/about.js';
import aboutEN from './localization/en/about.js';

const options = {
    order: ['querystring', 'navigator'],
    checkWhitelist: true
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    mainpage: mainEN,
                    skills: skillsEN,
                    cv: cvEN,
                    about: aboutEN,
                    print: "Print me!",
                    footer: {
                        copy: "Built in 2020 with ❤️ & ☕ by me"
                    },
                    switchLang: {
                        name: '🇪🇸',
                        lang: 'es',
                        alt: 'Español'
                    }
                }
            },
            'en-US': {
                translation: {
                    mainpage: mainEN,
                    skills: skillsEN,
                    cv: cvEN,
                    about: aboutEN,
                    print: "Print me!",
                    footer: {
                        copy: "Built in 2020 with ❤️ & ☕ by me"
                    },
                    switchLang: {
                        name: '🇪🇸',
                        lang: 'es',
                        alt: 'Español'
                    }
                }
            },
            'en-GB': {
                translation: {
                    mainpage: mainEN,
                    skills: skillsEN,
                    cv: cvEN,
                    about: aboutEN,
                    print: "Print me!",
                    footer: {
                        copy: "Built in 2020 with ❤️ & ☕ by me"
                    },
                    switchLang: {
                        name: '🇪🇸',
                        lang: 'es',
                        alt: 'Español'
                    }
                }
            },
            'es-ES': {
                translation: {
                    mainpage: mainES,
                    skills: skillsES,
                    cv: cvES,
                    about: aboutES,
                    print: "¡Imprímeme!",
                    footer: {
                        copy: "Built in 2020 with ❤️ & ☕ by me"
                    },
                    switchLang: {
                        name: '🇬🇧',
                        lang: 'en',
                        alt: 'English'
                    }
                }
            },
            es: {
                translation: {
                    mainpage: mainES,
                    skills: skillsES,
                    cv: cvES,
                    about: aboutES,
                    print: "¡Imprímeme!",
                    footer: {
                        copy: "Built in 2020 with ❤️ & ☕ by me"
                    },
                    switchLang: {
                        name: '🇬🇧',
                        lang: 'en',
                        alt: 'English'
                    }
                }
            },
        },
        fallbackLng: 'es-ES',
        debug: false,
        detection: options,
        whitelist: ['es-ES', 'es', 'en-US', 'en-GB', 'en'],

        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;