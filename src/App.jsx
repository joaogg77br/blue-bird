import React from 'react';
import Banner from './components/Banner';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import QuemSomos from './components/Quemsomos';
import Valores from './components/Valores';
import OqueFazemos from './components/OqueFazemos';
import Artivismo from './components/Artivismo';
import ArtCtrMrc from './components/ArtCtrMrc';
import Footer from './components/Footer';
import OndeAtuamos from './components/ondeAtuamos';
import Diferences from './components/Diferences';
import SimpleContactForm from './components/Formulário';
import NossosClients from './components/NossosClientes';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Altera o idioma
  };

  return (
    <div>
      <Header />
      <Banner/>
      <QuemSomos/>
      <Valores/>
      <OqueFazemos/>
      <NossosClients/>
      <Artivismo/>
      <ArtCtrMrc/>
      <Diferences/>
      <OndeAtuamos/>
      <SimpleContactForm/>
      <Footer/>
    </div>
  );
};

export default App;
