import React, { useContext,useState,useEffect } from "react";
import { DataContext } from "../../../Context/data";
import Table from 'react-bootstrap/Table';
import { FaTrash } from "react-icons/fa";
import { apiLocal } from "../../Services";


export const ItensLista = () => {
  const{lista,aumentarItem,diminuirItem,removalItem} = useContext(DataContext)
  const [total,setTotal] = useState(0)
  const [cliente,setCliente] = useState()
  
const getcliente= async () => {
    var idcliente = document.getElementById("idcliente").value
    var cliente = await apiLocal.get(`/clientes/${idcliente}`)
    setCliente(cliente.data)
    console.log(cliente);
}
 
const handlePrice =() => {
  let valor = 0;
  lista.map((produto)=>(valor+=produto.quantidade*produto.valorUnitario));
  setTotal(valor)
}

  
useEffect(() => {
  handlePrice();
});

  return(
        <>  
          <h2>Itens do Pedido:</h2>
        
            <div>
              
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>codigo</th>
          <th>Produto</th>
          <th>Preco</th>
          <th>Quantidade</th>
          <th>subtotal</th>
          <th>Opcoes</th>
        </tr>
      </thead>
      <tbody>
      {lista.map(produto =>(
        <tr key={produto.id}>
          <td><img src={produto.imagemUrl} style={{width:'50px',height:'60px'}}></img></td>
          <td>{produto.nome}</td>
          <td>{produto.valorUnitario}</td>
           <td>
           <button onClick={() => diminuirItem(produto)}>-</button>
          <span> {produto.quantidade >0 ? produto.quantidade : removalItem(produto) }</span>          
          <button onClick={() => aumentarItem(produto)}>+</button></td>
          <td>{produto.valorUnitario * produto.quantidade}</td>
          <td>
           <FaTrash onClick={() => removalItem(produto)}/>
          </td>
         
          <div>
            
          </div>
        </tr>
         ))}
      </tbody>
    </Table>
            </div>
            {total >0 ? total :"Seu carrino esta vazio"}
            <div>
              <input type="number" id="idcliente"/>
              <button onclick={getcliente}>Buscar</button>
            </div>
        </>
    )
}