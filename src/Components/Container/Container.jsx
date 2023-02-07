import React from "react";
import {ContainerStyle,} from "./Css/ContainerStyle";
import { Containerbox1,Ptext1,Htext1, Ptext2 } from "./Css/ContainerBox1";
import { Containerbox2} from "./Css/ContainerBox2";
import { Containerbox3} from "./Css/ContainerBox3";
import { Containerbox4} from "./Css/ContainerBox4";


    function Container () {
        return(
            <ContainerStyle>
                <Containerbox1>
                    <Ptext1>02 de jul, 2021</Ptext1>   
                    <Htext1>Agora é oficial: o Windows 11 está vindo</Htext1>
                    <Ptext2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</Ptext2>
                </Containerbox1>
            <Containerbox2>
                <Ptext1>02 de jul, 2021</Ptext1>
                <Htext1>Tim Berners-Lee vai leiloar código-fonte da web</Htext1>
                <Ptext2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</Ptext2>
            </Containerbox2>
            <Containerbox3>
                <Ptext1>02 de jul, 2021</Ptext1>
                <Htext1>Tem Firefox novo no pedaço e você vai querer migrar</Htext1>
                <Ptext2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.</Ptext2>
            </Containerbox3>
            <Containerbox4>
                <Ptext1>02 de jul, 2021</Ptext1>
                <Htext1>John McAfee, criador do antivírus McAfee, morre</Htext1>
                <Ptext2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</Ptext2>
            </Containerbox4>


            </ContainerStyle>
        )
    }
    export default Container