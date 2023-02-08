import React from "react";
import { ContainerStyle, } from "./Css/ContainerStyle";
import { Containerbox1, Ptext1, Htext1, Ptext2 } from "./Css/ContainerBox1";
import Heart from "./Heart"
import { Data } from "./Data";

function Container(props) {
    
    const { pesquisa } = props;
    const data = Data.filter((item) => {
        return pesquisa.toLocaleLowerCase() === '' ? item : item.ptex2.toLocaleLowerCase().includes(pesquisa)
    }
    )
    const listitem = data.map(
        (item, i) =>
            <Containerbox1 key={i}>
                <Heart />
                <Ptext1> {item.ptex1}</Ptext1>
                <Htext1> {item.htex1}</Htext1>
                <Ptext2> {item.ptex2}</Ptext2>
            </Containerbox1>
    )
    return (
        <>
            <ContainerStyle>
                {listitem}
            </ContainerStyle>
        </>
    )
}
export default Container