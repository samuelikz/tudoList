import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './app.module.scss';
import Cronometro from '../components/Cronometro';
import ITarefas from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefas>();

  function selecionaTarefa(tarefaSelecionada: ITarefas){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAteriores => tarefasAteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa(){
    setTarefas(tarefasAteriores => tarefasAteriores.map(tarefa => {
      if (selecionado) {
        setSelecionado(undefined);
        if (tarefa.id === selecionado.id) {
          return{
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
      }
      return tarefa;
    }))
  }
  
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
        selecionado={selecionado} 
        finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
