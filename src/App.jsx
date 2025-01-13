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
import SlideGrid1 from './components/SlideGrid1';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Altera o idioma
  };

  return (
    <div className='scroll-smooth'>
      <Header />
      <Banner />
      <div id='quemsomos'></div>
      <QuemSomos />
      <Valores />
      <div id='oqueFazemos'></div>
      <OqueFazemos />
      <div id='nossosclients'></div>
      <NossosClients />
      <div id='artivismo'></div>
      <Artivismo />
      <ArtCtrMrc />
      <Diferences />
      <div id='ondeatuamos'></div>
      <OndeAtuamos />
      <div id='contato'></div>
      <SimpleContactForm />
      <Footer />
      {/*
      <SlideGrid1/>
      */}

    </div>

  );
};

export default App;
