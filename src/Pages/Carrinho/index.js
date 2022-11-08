import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/data";
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa";
import { apiLocal } from "../../Components/Services";
import { ButtonMais, ButtonMenos,Resumo } from "./style";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


export const Carrinho = () => {
  
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { lista, aumentarItem, diminuirItem, removalItem } =
    useContext(DataContext);
  const [total, setTotal] = useState(0);
  const [pedido, setPedido] = useState([]);

  const [item, setItem] = useState(
    {
      dataEntrega: new Date(),
      dataEnvio: new Date(),
      client: {
        id: 1,
      },
      items: [
        // {
          // produtoId: "",
          // quantidade: "",
        // },
      ],
    },
  );

  const handlePost = () => {
    const arrayItens = lista.map((item) => {
      const novoItem = {
        "produtoId" : item.id,
        "quantidade": item.quantidade,
      }

      return novoItem
    })
    
   

    apiLocal.post(`/pedido`, {...item, items:arrayItens});
    handleShow();
  };



  const handlePrice = () => {
    let valor = 0;
    lista.map(
      (produto) => (valor += produto.quantidade * produto.valorUnitario)
    );
    setTotal(valor);
  };

  useEffect(() => {
    handlePrice();
  });

 

  return (
    <>
      <h2>Itens do Pedido:</h2>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Descricao</th>
              <th>Preco</th>
              <th>Quantidade</th>
              <th>subtotal</th>
              <th>Opcoes</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((produto) => (
              <tr key={produto.id}>
                <td style={{alignItems:"center",textAlign:"center" }}>
                  <img
                    src={produto.imagemUrl}
                    style={{ width: "200px", height: "200px" , alignItems:"center",textAlign:"center" }}
                  ></img>
                </td>
                <td>{produto.nome}</td>
                <td>
                  {produto.valorUnitario.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td>
                  <ButtonMenos onClick={() => diminuirItem(produto)}>-</ButtonMenos>
                  <span>
                    {" "}
                    {produto.quantidade > 0
                      ? produto.quantidade
                      : removalItem(produto)}
                  </span>
                  <ButtonMais onClick={() => aumentarItem(produto)}>+</ButtonMais>
                </td>
                <td>R${produto.valorUnitario * produto.quantidade}</td>
                <td >
                  <FaTrash onClick={() => removalItem(produto)} />
                </td>

                <div></div>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Resumo>
      <h3>Resumo do Pedido</h3>
      <h4>Total do Pedido</h4>
      <h4>
        {" "}
        {total > 0
          ? total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          : "Seu carrino esta vazio"}
      </h4>
    
      <Button variant="primary" onClick={handlePost} >
        Confirmar Pedido
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>Pedido enviado com sucesso</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Resumo>
    </>
  );
};
