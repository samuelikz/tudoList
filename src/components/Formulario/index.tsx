import React, { useState } from "react";
import Botao from "../Botao";
import style from './formulario.module.scss';
import ITarefas from "../../types/tarefa";
import { v4 as uuidv4 } from "uuid";

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

export default function Formulario({ setTarefas }: Props){
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ])
            setTarefa('');
            setTempo("00:00");
    }
    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input type="text" value={tarefa} onChange={evento => setTarefa(evento.target.value)} name="tarefa" id="tarefa" placeholder="O que você quer estudar" required/>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input step="1" type="time" value={tempo} onChange={evento => setTempo(evento.target.value)} name="tempo" id="tempo" min="00:00:00" max="10:30:00" required/>
            </div>
            <Botao type="submit" text="Adicionar" />
        </form>
    )
}
