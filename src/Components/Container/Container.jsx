import React from "react";
import {ContainerStyle,} from "./Css/ContainerStyle";
import { Containerbox1,Ptext1,Htext1, Ptext2 } from "./Css/ContainerBox1";




    function Container () {
        const itens = [
        {ptex1:'02 de jul, 2021'},
        {htex1:'Agora é oficial: o Windows 11 está vindo'},
        {ptex2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'},
        {ptex1:'02 de jul, 2021'}
        ];

        const listitem=itens.map(
            (item,i)=>
                <>
                
                <Ptext1 key={i}>{item.ptex1}</Ptext1>
                <Htext1 key={i}>{item.htex1}</Htext1>
                <Ptext2 key={i}>{item.ptex2}</Ptext2>
                
                </>
                
        )
        return(
           <ContainerStyle>
            <Containerbox1>
              {listitem}
              </Containerbox1>
           </ContainerStyle>
        )
    }
    export default Container