import React, {useState} from "react";
import { Top, Codelandia, Blog, Seach, ImgS } from "./Css/Style";
import { Input } from "./Css/StyleInput";
import seaching from "../../Assets/seach.png";



function Header() {
  
const [search,setSearch] = useState();
    return (
        <Top>
            <Codelandia>Codelândia</Codelandia>
            <Blog>Blog</Blog>
            <Seach>
                <ImgS src={seaching} />
                <Input type='text' placeholder="Pesquise no Blog" id="inputHeader" value={search} onChange={(e)=> setSearch(e.target.value)} ></Input>
            </Seach>
        </Top>
    )
}
export default Header