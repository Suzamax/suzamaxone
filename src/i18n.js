import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
    order: ['navigator']
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    mainpage: {
                        title: "Carlos Cañellas",
                        subtitle: "Sysadmin, DevOps, web developer: frontend and backend"
                    },
                    skills: {
                        title: "Skills/CV"
                    },
                    blog: {
                        title: "Blog"
                    },
                    about: {
                        title: "About me"
                    },
                    footer: {
                        copy: "Built in 2020 with ❤️ & ☕ by "
                    }
                }
            },
            'es-ES': {
                translation: {
                    mainpage: {
                        subtitle: "Administrador de sistemas, DevOps, desarrollador web frontend y backend",
                    },
                    skills: {
                        title: "Habilidades/CV"
                    },
                    about: {
                        title: "Sobre mí"
                    }
                }
            },
        },
        lng: 'es-ES',
        fallbackLng: 'en',
        debug: false,
        detection: options,

        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;