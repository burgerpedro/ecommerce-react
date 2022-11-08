import React, { useEffect, useState, useContext } from "react";
import { CardBox } from "../Carrinho/style";
import { Carousel } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { DataContext } from "../../Context/data";
import { apiLocal } from "../../Components/Services";
import { Button } from "./style";

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
              src="https://www.animeunited.com.br/oomtumtu/2021/07/hiroaka_202106_01-745x268.jpg"
              style={{ width: "200x", height: "400px" }}
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://isrv.nicephotos.com.br/imgs/site_novo/imagens/BannerFrete_AcimaDe100_Landing.jpg?v1"
              style={{ width: "200x", height: "400px" }}
              alt="Second slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/10/10/bleach-guerra-sangrenta-mil-anos-02-1hrgzodb9kmya.jpeg"
              style={{ width: "200x", height: "400px" }}
              alt="Third slide"
            />

            <Carousel.Caption>
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
                style={{ width: "250px", height: "250px" }}
                alt="Imagem do Produto"
              />
              <hr></hr>
              <div>
                <h5>{produto.nome}</h5>
              </div>
              <div>
                <p>{produto.descricao}</p>
              </div>
              <div>
                <p>
                  {produto.valorUnitario.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <div>
                <Button
                  onClick={() => {
                    adicionarLista(produto);
                  }}
                >
                  Comprar
                </Button>
              </div>
            </CardBox>
          );
        })}
      </div>
    </>
  );
};
