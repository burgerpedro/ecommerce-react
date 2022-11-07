import React, { useEffect, useState,useContext } from "react";
import { apiLocal, dogApi } from "../../Services"
import { useParams,useNavigate } from "react-router-dom"
import { CardBox } from "./style";
import { ItensLista} from "./pedido"
import { DataContext } from "../../../Context/data";


export const Products = () => {

    
    const [produtos, setProdutos] = useState([])
    const {lista,adicionarLista} = useContext(DataContext)
 
    
    


      console.log(lista)

    const getProdutos = async () => {
        var produto = await apiLocal.get(`/produtos`)
        setProdutos(produto.data)
        console.log(produto);
    }

    useEffect(() => {
        getProdutos()  
    }, [])
   
    return(
        <>
          {produtos.map((produto) => {
                return (        
                       <CardBox key={produto.id}>
                        <img src={produto.imagemUrl} style={{width:'80px',height:'120px'}}/>
                        <h5>{produto.nome}</h5>
                        <p>{produto.descricao}</p>
                        <p>R$ {produto.valor_unitario}</p>
                        <button onClick={()=>{{adicionarLista(produto)}}}>Comprar</button>
                       </CardBox>
                )
            })}
        
        </>
    )
}