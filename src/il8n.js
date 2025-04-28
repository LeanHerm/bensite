import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define your translation resources
const resources = {
  en: { // English
    translation: {
      // Navbar
      navbar: {
        about: "About",
        soundGear: "Sound Gear",
        gallery: "work experience",
        contact: "Contact"
      },
      // About Section
      about: {
        title: "About Me",
        paragraph: "I’m an experienced location sound technician based in Lisbon Portugal. I have been working with documentary, corporate, and narrative projects in the Boston area since graduating from film school in 2023. Whether it's a large set or a small passion project, I provide the same level of professional location sound production services."
      },
      // Sound Gear Section
      soundGear: {
        title: "Sound Gear:",
        item1: "Zoom F8n pro Mixer",
        item2: "Lectrosonics Wireless",
        item3: "Sanken Cos-11d Lavalier mics",
        item4: "Sennheiser MKH 50 and 416 Shotgun microphones",
        item5: "Tentacle Synch Timecode",
        // Add more gear items if needed
      },
      // Gallery Section
      gallery: {
        title: "Work Experience",
        paragraph: "I’ve worked with international sports leagues, non-profits, award winning indie films, and everything in between. If you have a project coming up, big or small, reach out and let's collaborate!",
    },
      // Contact Section
      contact: {
        title: "Contact",
        line1: "This is the contact section. Add your contact information or a form here.",
        line2: "Email: your.email@example.com"
        // Add more contact details
      }
    }
  },
  pt: { // Portuguese
    translation: {
      // Navbar
      navbar: {
        about: "Sobre Mim", // Replace with your Portuguese text
        soundGear: "Equipamento Som",
        gallery: "Experience",
        contact: "[PT] Contato"
      },
      // About Section
      about: {
        title: "Sobre Mim",
        paragraph: "Eu sou um técnico experiente de som, localizado em Lisboa. Eu estava trabalhando com projetos de documentário, empresa, e narrativa em Boston desde da graduação de escola do filme em 2023. Se estivesse um produção grande ou um projeto de paixão mais pequeno, vou trazer o egual nível de produção de som e profissionalismo."
      },
      // Sound Gear Section
      soundGear: {
        title: "Equipamento de recordar do som:",
        item1: "Zoom F8n Pro Gravadore",
        item2: "Emisores do Lectrosonics",
        item3: "Sanken Cos-11d microfones de lapela",
        item4: "Sennheiser MKH 50 e 416 Microfones Direccionais",
        item5: "Tentacle Synch mk II Gerador de Timecode",
        // Add more gear items if needed
      },
      // Gallery Section
      gallery: {
        title: "Experience de trabalhar:",
        paragraph: "Fui trabalhar com ligas desportivas internacionais, cuidade de crianças sem lucro, filmes prémio-ganhar dos estudantes, e toda a meia. Se tu terei um projeto vir, grande ou pequena, liga-me e vamos colaborar!"
      },
      // Contact Section
      contact: {
        title: "Contato",
        line1: "",
        line2: ""
        // Add more contact details
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // use English if selected language is missing
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;