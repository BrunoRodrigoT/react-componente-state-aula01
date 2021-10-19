import React from 'react';
import Destino from './carta/Destino';
import Remetente from './carta/Remetente';
import Botoes from './botoes/Botoes';

import './App.css';



function App() {

  return (
   <>
     <h1>Olá <Remetente>Joana</Remetente> - <Destino>Minas Gerais</Destino></h1>
     <p>
       Estou escrevendo-lhe esta carta por causa da atividade que os alunos vão fazer, okay. Não desista, continue fazendo as atividades, treinando e praticando. O céu é o limite!
     </p>

     <Botoes/>
   </>
  );
}

export default App;
