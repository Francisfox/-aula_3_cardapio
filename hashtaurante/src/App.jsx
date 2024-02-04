import { useState } from "react"
import Hashtaurante from "./assets/hashtaurante.webp"
import "./App.css"
import { Navegacao } from "./Navegacao"
import { ItemCardapio } from "./ItemCardapio"
import {pratosPrincipais,sobremesas,bebidas} from "./cardapio"

export function App() {
    const paginasMenu = [pratosPrincipais,sobremesas,bebidas]; 
    const [paginasSelecionadas,atualizarPaginaSelecionada] = useState(0);
    return <>
        <img src={Hashtaurante} alt="" className="capa"/>
        <h1>Titulo da minha pagina React</h1>
        <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} ></Navegacao>
        <div className="menu">
            {paginasMenu[paginasSelecionadas].map(item  => <ItemCardapio nome ={item.nome} preco = {item.preco} descricao = {item.descricao} imagem = {item.imagem}/> )}
        </div>
                    
    </>
}