import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiLocal } from "../../Services";
import Table from "react-bootstrap/Table";

export const Produto = () => {
  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    qtdEstoque: 1,
    valorUnitario: 0.01,
    imagemUrl: "",
  });
  const [produtos, setProdutos] = useState([]);

  function handleChange(event) {
    setProduto({ ...produto, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    apiLocal.post(`/produtos`, produto).then((result) => {});
  }

  const handleGet = async () => {
    var response = await apiLocal.get(`/produtos`);
    setCategorias(response.data);
  };

  const handleDelete = (id) => {
    apiLocal.delete(`/produtos/${id}`);
  };

  const handlePut = (id) => {
    apiLocal.put(`/produtos/${id}`, produto);
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div>
      <h1>Cadastro de produtos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Nome do Produto</label>
            <input
              onChange={handleChange}
              value={produto.nome}
              name="nome"
              type="text"
            ></input>
          </div>
          <div>
            <label>Descrição do Produto</label>
            <input
              onChange={handleChange}
              value={produto.descricao}
              name="descricao"
              type="text"
            ></input>
              <label>Descrição do Produto</label>
            <input
              onChange={handleChange}
              value={produto.qtdEstoque}
              name="qtdEstoque"
              type="number"
              min={1}
            ></input>
            <input
              onChange={handleChange}
              value={produto.valorUnitario}
              name="valorUnitario"
              type="number"
              min={0.01}
            ></input>
            <input
              onChange={handleChange}
              value={produto.imagemUrl}
              name="imagemUrl"
              type="text"
            ></input>
          </div>

          <input type="submit" value="Salvar"></input>
        </div>
        <hr></hr>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>codigo</th>
              <th>Produto</th>
              <th>Descricao</th>
              <th>Estoque</th>
              <th>Valor Unitario</th>
              <th>Opcoes</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nome}</td>
                <td>{p.descricao}</td>
                <td>{p.qtdEstoque}</td>
                <td>{valorUnitario}</td>
                <td>
                  <button onClick={() => handlePut(p.id)}>editar</button>
                  <button onClick={() => handleDelete(p.id)}>excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </form>
    </div>
  );
};
