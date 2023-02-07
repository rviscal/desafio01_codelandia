import React from "react";
import { Top ,Codelandia, Blog,Seach,ImgS} from "./Css/Style";
import {Input} from "./Css/StyleInput"
import seachimg from './Assets/seach.png'


function TopPage (){
    return(

    <Top>
        <Codelandia>Codelândia</Codelandia>
        <Blog>Blog</Blog>
        <Seach>
            <ImgS src={seachimg} />
            <Input type='text' placeholder="Pesquise no Blog"></Input>
        </Seach>
        
    </Top>
    
     
    ) 


}
export default TopPage