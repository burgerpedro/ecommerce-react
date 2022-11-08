import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/data";
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa";
import { apiLocal } from "../../Components/Services";
import { ButtonMais, ButtonMenos } from "./style";

export const Carrinho = () => {
  const { lista, aumentarItem, diminuirItem, removalItem } =
    useContext(DataContext);
  const [total, setTotal] = useState(0);
  const [pedido, setPedido] = useState([]);

  const [item, setItem] = useState([
    {
      dataEntrega: "2022-10-28",
      dataEnvio: "2022-10-26",
      client: {
        id: 1,
      },
      items: [
        {
          produtoId: "",
          quantidade: "",
        },
      ],
    },
  ]);

  const pegarItens = () => {
    for (let index = 0; index < lista.length; index++) {
      setItem(...item, {
        items: [
          { produtoId: lista[index].id, quantidade: lista[index].quantidade },
        ],
      });
    }
  };

  console.log("item", item);
  // const pegarPedido = (produto) => {
  //   const itemObject = [...lista];
  //   const item = itemObject.find((p) => p.id === produto.id);
  //   if (!item) {
  //     itemObject.push({
  //       dataEntrega: "2022-10-28",
  //       dataEnvio: "2022-10-26",
  //       client: {
  //         id: 1,
  //       },
  //       items: [
  //         {
  //           produtoId: produto.id,
  //           quantidade: produto.quantidade,
  //         },
  //       ],
  //     });
  //   }
  //   setPedido(itemObject);
  // };

  const handlePost = () => {
    pegarItens();
    apiLocal.post(`/pedido/`, pedido);
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

  console.log("Pedido", pedido);

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
      <h3>Total do Pedido</h3>
      <h4>
        {" "}
        {total > 0
          ? total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          : "Seu carrino esta vazio"}
      </h4>
      <div>
        <button onClick={handlePost}> Enviar pedido</button>
      </div>
    </>
  );
};
