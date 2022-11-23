import React from "react";
import { Route,BrowserRouter,Routes, Router } from "react-router-dom";

import { Home } from "../../Home"
import { About } from "../Pages/About";
import { NotFound } from "../Pages/NotFound";
import { Products } from "../Pages/Products";
import { Categoria } from "../Pages/Cadastro/Categoria";
import { Header } from "../Layout/Header"
import { Footer } from "../Layout/Footer";
import { ItensLista } from "../Pages/Products/pedido";


export const Rotas = () =>{
    return(
        <BrowserRouter>
           <Header/>
            <Routes>
                 
                <Route path="/" element={<Home />} />
                
                <Route path="/sobrenos" element={<About />} />
                <Route path="/produtos" element ={<Products />}/>
                <Route path="/cadastro/categoria" element ={<Categoria />}/>
                <Route path="/pedidos" element ={<ItensLista/>}/>
                <Route path="*" element={<NotFound />} />
                
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}