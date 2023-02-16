import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "introduce": "welcome, lulu bueaty project 💅"
    }
  },
  ch: {
    translation: {
      "introduce": "卢布埃蒂欢迎计划 💅"
    }
  },
  th: {
    translation: {
      "introduce": "ยินดีต้อนรับ, โปรเจ็คอาหารอิตาเลี่ยน 💅"
    }
  },
  vt : {
    translation: {
      "introduce": "Chào mừng, dự án đáng yêu 💅"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;