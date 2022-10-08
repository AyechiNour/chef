import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import translationEn from "./Language/anglais.json"
import translationFr from "./Language/francais.json"
const resources = {
    en: {
        translation: translationEn
    },
    fr: {
        translation: translationFr
    }
};
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        },
        detection: {
            order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain']
        }
    });
export default i18n;