import React, { useEffect, useState, useContext } from "react";
import { CardBox } from "../Carrinho/style";
import { Carousel } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { DataContext } from "../../Context/data";
import { apiLocal } from "../../Components/Services";


export const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const { lista, adicionarLista } = useContext(DataContext);

  console.log(lista);

  const getProdutos = async () => {
    var produto = await apiLocal.get(`/produtos`);
    setProdutos(produto.data);
    console.log(produto);
  };

  useEffect(() => {
    getProdutos();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://902536.smushcdn.com/2442365/wp-content/uploads/2021/10/Black-Friday-2021-800x400.jpg?lossy=1&strip=1&webp=1"  style={{ width: "200x", height: "400px" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://isrv.nicephotos.com.br/imgs/site_novo/imagens/BannerFrete_AcimaDe100_Landing.jpg?v1" style={{ width: "200x", height: "400px" }}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://blog.oficinadosbits.com.br/wp-content/uploads/2021/01/2021-01_CUPOM-DESCONTO_BASE-2.jpg" style={{ width: "200x", height: "400px" }}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        {produtos.map((produto) => {
          return (
            <CardBox key={produto.id} data-aos="fade-right">
              <img
                src={produto.imagemUrl}
                style={{ width: "80px", height: "120px" }}
                alt="Imagem do Produto"
              />
              <h5>{produto.nome}</h5>
              <p>{produto.descricao}</p>
              <p>
                {produto.valorUnitario.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <button
                onClick={() => {
                  adicionarLista(produto);
                }}
              >
                Comprar
              </button>
            </CardBox>
          );
        })}
      </div>
    </>
  );
};
