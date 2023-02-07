import React from "react";
import HeartOutline from "../../Assets/heart-outline.svg"
import heart from "../../Assets/heart.svg"
import { HeartStyle } from "./Css/HeartStyle";
import { useState } from "react";

function Heart1 (props) {
    let imagens = {
     img1 : HeartOutline,
     img2 : heart
    }
        const trocarimagem = () => {
            setImagem(state => state === 'img1' ? 'img2': 'img1');
        }
            const [imagem, setImagem] = useState('img1');
             return(
                 <HeartStyle id="change" src={imagens[imagem]} alt="" onClick={trocarimagem} />
     )
}
export default Heart1