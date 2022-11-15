import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/common.json";

const resources = { en: { translation: { ...en } } };

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,

    lng: "en",

    interpolation: { escapeValue: false }
  })
  // eslint-disable-next-line
  .catch((e) => console.log("=============translations error============", e));

export default i18n;
