import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Configura o carregamento de traduções via HTTP
  .use(initReactI18next) // Conecta o i18next ao React
  .init({
    debug:true,
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt', // Idioma de fallback

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Caminho dos arquivos de tradução
    },
    interpolation: {
      escapeValue: false, // Necessário para React
    },
  });

export default i18n;
