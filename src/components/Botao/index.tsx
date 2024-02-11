import React from "react";
import style from './botao.module.scss';

interface Props {
    text: string, 
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

export default function Botao({text, onClick, type}: Props){
    return(
        <button type={type} onClick={onClick}  className={style.botao}>
            {text}
        </button>
    )
}