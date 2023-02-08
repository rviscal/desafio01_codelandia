import React from "react";
import {ContainerStyle,} from "./Css/ContainerStyle";
import { Containerbox1,Ptext1,Htext1, Ptext2 } from "./Css/ContainerBox1";




    function Container () {
        const itens = [
        {ptex1:'02 de jul, 2021'},
        {htex1:'Agora é oficial: o Windows 11 está vindo'},
        {ptex2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'},
        {ptex1:'02 de jul, 2021'},
        {htex1:'Tim Berners-Lee vai leiloar código-fonte da web'},
        {ptex2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'}
        ];

        const listitem=itens.map(
            (item,i)=>
                
                
                <Containerbox1>
                
                <Ptext1 key={i}>{item.ptex1}</Ptext1>,
                <Htext1 key={i}>{item.htex1}</Htext1>,
                <Ptext2 key={i}>{item.ptex2}</Ptext2>
                    
                </Containerbox1>
                
               
                
        )
        return(
            <>
            <ContainerStyle>
             {listitem}
            </ContainerStyle>  
            </>
        )
    }
    export default Container