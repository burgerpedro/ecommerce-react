import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/data";
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa";
import { apiLocal } from "../../Components/Services";

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
              <th>codigo</th>
              <th>Produto</th>
              <th>Preco</th>
              <th>Quantidade</th>
              <th>subtotal</th>
              <th>Opcoes</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((produto) => (
              <tr key={produto.id}>
                <td>
                  <img
                    src={produto.imagemUrl}
                    style={{ width: "50px", height: "60px" }}
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
                  <button onClick={() => diminuirItem(produto)}>-</button>
                  <span>
                    {" "}
                    {produto.quantidade > 0
                      ? produto.quantidade
                      : removalItem(produto)}
                  </span>
                  <button onClick={() => aumentarItem(produto)}>+</button>
                </td>
                <td>R${produto.valorUnitario * produto.quantidade}</td>
                <td>
                  <FaTrash onClick={() => removalItem(produto)} />
                </td>

                <div></div>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <h3>Total do Pedido</h3>
      {total > 0
        ? total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        : "Seu carrino esta vazio"}

      <button onClick={handlePost}> Enviar pedido</button>
    </>
  );
};
