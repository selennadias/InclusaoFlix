import React from 'react';
import dadosIniciais from './data/dados.json'
import Banner from './components/Banner'

function App() {
  return (
    <div>
     
     <Banner 
       videoTitle={dadosIniciais.categorias[0].videos[0].titulo} 
       url={dadosIniciais.categorias[0].videos[0].url} 
       videoDescription={"Projeto InclusaoFLIX"} /> 
   </div> 
); 
} 
export default App; 