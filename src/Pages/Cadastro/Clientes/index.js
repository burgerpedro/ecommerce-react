

// const Clientes = () =>{

//     const [cliente, setCliente] = useState({
//         email: "",
//         nomeCompleto: "",
//         cpf: "",
//         dataNascimento: "",
//         endereco: {
//             numero:"",
//             complemento: "",
//             cep: "",
//         }
//         });

//       const [clientes, setClientes] = useState([]);
    
//       function handleChange(event) {
//         event.preventDefault();
//         setProduto({ ...produto, [event.target.name]: event.target.value });
//       }
    
//       function handleSubmit(event) {
//         apiLocal.post(`/clientes`, cliente).then((result) => {});
//       }
    
//       const handleGet = async () => {
//         var response = await apiLocal.get(`/clientes`);
//         setClientes(response.data);
//       };
    
//       const handleDelete = (id) => {
//         apiLocal.delete(`/clientes/${id}`);
//       };
    
//       const handlePut = (id) => {
//         apiLocal.put(`/clientes/${id}`, cliente);
//       };
    
//       useEffect(() => {
//         handleGet();
//       }, []);
    
//       return (
//         <div>
//           <h1>Cadastro de cliente</h1>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <div>
//                 <label>Nome do Cliente</label>
//                 <input
//                   onChange={handleChange}
//                   value={cliente.nomeCompleto}
//                   name="nomeCompletof"
//                   type="text"
//                 ></input>
//               </div>
//               <div>
//                 <label>Email</label>
//                 <input
//                   onChange={handleChange}
//                   value={cliente.email}
//                   name="email"
//                   type="email"
//                 ></input>
//                   <label>cpf</label>
//                 <input
//                   onChange={handleChange}
//                   value={cliente.cpf}
//                   name="cpf"
//                   type="text"
                  
//                 ></input>
//                  <label>Data de nascimento</label>
//                 <input
//                   onChange={handleChange}
//                   value={cliente.dataNascimento}
//                   name="dataNascimento"
//                   type="date"
                  
//                 ></input>
//                 <label>Endereco</label>
//                 <input
//                   onChange={handleChange}
//                   value={endereco.cliente.numero}
//                   name="numero"
//                   type="number"
//                 ></input>
//                 <label>Endereco</label>
//                 <input
//                   onChange={handleChange}
//                   value={endereco.cliente.complemento}
//                   name="numerocomplemento"
//                   type="text"
//                 ></input>
//                   <label>Endereco</label>
//                 <input
//                   onChange={handleChange}
//                   value={endereco.cliente.complemento}
//                   name="cep"
//                   type="text"
//                 ></input>

//               </div>
    
//               <input type="submit" value="Salvar"></input>
//             </div>
//             <hr></hr>
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>codigo</th>
//                   <th>Nome Completo</th>
//                   <th>CPF</th>
//                   <th>Data Nascimento</th>
//                   <th>Logradouro</th>
//                   <th>CEP</th>
//                   <th>Opcoes</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Clientes.map((c) => (
//                   <tr key={c.id}>
//                     <td>{c.nomeCompleto}</td>
//                     <td>{c.cpf}</td>
//                     <td>{c.dataNascimento}</td>
//                     <td>{c.endereco.logradouro}</td>
//                     <td>{c.endereco.cep}</td>
//                     <td>
//                       <button onClick={() => handlePut(c.id)}>editar</button>
//                       <button onClick={() => handleDelete(c.id)}>excluir</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </form>
//         </div>
//       );
  
// };