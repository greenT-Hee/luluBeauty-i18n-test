import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationToEn from './en.json'
import translationToCh from './ch.json'
import translationToTh from './th.json'
import translationToVt from './vt.json'

// 파일 분리하기 이전
// const resources = {
//   en: {
//     translation: {
//       "introduce": "welcome, lulu bueaty project 💅"
//     }
//   },
//   ch: {
//     translation: {
//       "introduce": "卢布埃蒂欢迎计划 💅"
//     }
//   },
//   th: {
//     translation: {
//       "introduce": "ยินดีต้อนรับ, โปรเจ็คอาหารอิตาเลี่ยน 💅"
//     }
//   },
//   vt : {
//     translation: {
//       "introduce": "Chào mừng, dự án đáng yêu 💅"
//     }
//   }
// };

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    fallbackLng: "en",
    lng: "en", 

    resources : {
      en : {
        translation : translationToEn,
      },
      ch : {
        translation : translationToCh,
      },
      th : {
        translation : translationToTh,
      },
      vt : {
        translation : translationToVt,
      },
    }
  });

  export default i18n;