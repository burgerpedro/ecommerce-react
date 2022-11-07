import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiLocal } from "../../Services";
import { LowBox } from "./style";
import Table from 'react-bootstrap/Table';

export const Categoria = () =>{
    
    const [categoria,setCategoria] =useState({nome:'',descricao:''})
    const [categorias,setCategorias] = useState([])
   

    function handleChange(event){
        setCategoria({...categoria,[event.target.name]:event.target.value})
    }

    function handleSubmit(event){
        apiLocal.post(`/categoria`,categoria).then((result) => {
        })}

    const getCategorias = async () => {
        var response = await apiLocal.get(`/categoria`)
        setCategorias(response.data)
   }

   const handleDelete=(id)=>{
      apiLocal.delete(`/categoria/${id}`)
   }

   const handlePut = (id) =>{
    apiLocal.put(`/categoria/${id}`,categoria)
   }

    
    useEffect(() => {
        getCategorias()
        
    },[])


    return(
          <div>
            <h1>Cadastro Categoria de produtos</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>Nome da Categoria</label>
                        <input onChange={handleChange} value={categoria.nome} name="nome" type="text" ></input>
                    </div>
                    <div>
                    <label>Descrição da Categoria</label>
                    <input onChange={handleChange} value={categoria.descricao} name="descricao" type="text" ></input>
                    </div>

                    <input type="submit" value = "Salvar"></input>

                </div>
                <hr></hr>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>codigo</th>
          <th>Categoria</th>
          <th>Descricao</th>
          <th>Opcoes</th>
        </tr>
      </thead>
      <tbody>
        {categorias.map(cat =>(
        <tr key={cat.id}>
          <td>{cat.id}</td>
          <td>{cat.nome}</td>
          <td>{cat.descricao}</td>
          <td>
            <button onClick={()=>handlePut(cat.id)} >editar</button>
            <button onClick={()=>handleDelete(cat.id)}>excluir</button>
          </td>
        </tr>
         ))}
      </tbody>
    </Table>
            </form>
        </div>
           
            
    )
}
