import React from "react";
import { Route,BrowserRouter,Routes } from "react-router-dom";

import { Home } from "../../Pages/Home"
import { About } from "../../Pages/About";
import {Carrinho} from "../../Pages/Carrinho"
import {NotFound} from "../../Pages/NotFound"
import { Categoria } from "../../Pages/Cadastro/Categoria";
import { Produtos } from "../../Pages/Cadastro/Produtos";
import { Login} from "../../Pages/Login/index"
import { Cadastro } from "../../Pages/Cadastro";
import {Header} from "../Layout/Header"
import {Footer} from "../Layout/Footer"
import {clientes} from "../../Pages/Cadastro/Clientes"


export const Rotas = () =>{
    return(
        <BrowserRouter>
           <Header/>
            <Routes>
                 
                <Route path="/" element={<Home />} />
                <Route path="/sobrenos" element={<About />} />
                <Route path="/cadastro/categoria" element ={<Categoria />}/>
                <Route path="/cadastro/produto" element ={<Produtos />}/>
                <Route path="/cadastro" element ={<Cadastro />}/>
                <Route path="/carrinho" element ={<Carrinho/>}/>
                <Route path="*" element={<NotFound />} />
                <Route path="/Login" element={<Login />} />
                {/* <Route path="/cadastro/cliente" element ={<Clientes />}/> */}
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}