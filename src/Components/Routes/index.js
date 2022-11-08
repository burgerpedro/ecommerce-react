import React from "react";
import { Route,BrowserRouter,Routes, Router } from "react-router-dom";

import { Home } from "../../Pages/Home"
import { About } from "../../Pages/About";
import { Header } from "../Layout/Header";
import { Footer } from "../Layout/Footer";
import {Carrinho} from "../../Pages/Carrinho"
import {NotFound} from "../../Pages/NotFound"
import { Categoria } from "../../Pages/Cadastro/Categoria";
import { Produtos } from "../../Pages/Cadastro/Produtos";



export const Rotas = () =>{
    return(
        <BrowserRouter>
           <Header/>
            <Routes>
                 
                <Route path="/" element={<Home />} />
                <Route path="/sobrenos" element={<About />} />
                <Route path="/cadastro/categoria" element ={<Categoria />}/>
                <Route path="/cadastro/produto" element ={<Produtos />}/>
                <Route path="/carrinho" element ={<Carrinho/>}/>
                <Route path="*" element={<NotFound />} />
                
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}