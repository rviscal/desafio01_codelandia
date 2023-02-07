import React from "react";
import { Top ,Codelandia, Blog,Seach} from "./Css/Style";
import {Input} from "./Css/StyleInput"


function TopPage (){
    return(

    <Top>
        <Codelandia>Codelândia</Codelandia>
        <Blog>Blog</Blog>
        <Seach>
            <Input type='text' placeholder="Pesquise no Blog"></Input>
        </Seach>
        
    </Top>
    
     
    ) 


}
export default TopPage