import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { apiLocal } from "../../../Components/Services";



export const Categoria = () =>{
    
    const [categoria,setCategoria] =useState({})
    const [categorias,setCategorias] = useState([])
   

    function handleChange(event){
        setCategoria({...categoria,[event.target.name]:event.target.value})
    }

    const  handleSubmit= async (event)=> {
      apiLocal.post(`/categoria`,categoria).then((result) => {
        } )
      }

    const getCategorias = async () => {
        var response = await apiLocal.get(`/categoria`)
        setCategorias(response.data)
   }

   console.log("cat",categoria);

   
   const handleDelete=(id)=>{
    const element = document.querySelector('#delete-request-error-handling .status'); 
    apiLocal.delete(`/categoria/${id}`).then(response => element.innerHTML = 'Delete successful')
      .catch(error => {
          element.parentElement.innerHTML = `Error: ${error.message}`;
          console.error('There was an error!', error);
      });
   }

   const handlePut = (id) =>{
    apiLocal.put(`/categoria/${id}`,categoria).then()
   }

    
    useEffect(() => {
        getCategorias()
        
    },[])

    console.log(categoria.id)

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
            <button onClick={()=>handlePut(cat?.id)} >editar</button>
            <button onClick={()=>handleDelete(cat?.id)}>excluir</button>
          </td>
        </tr>
         ))}
      </tbody>
    </Table>
            </form>
        </div>
           
            
    )
}
