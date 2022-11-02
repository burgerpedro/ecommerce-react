import React from "react";
import { Route,BrowserRouter,Routes, Router } from "react-router-dom";

import { Home } from "../Pages/Home"
import { About } from "../Pages/About";
import { NotFound } from "../Pages/NotFound";
import { Products } from "../Pages/Products";
import { Header } from "../Layout/Header"

export const Rotas = () =>{
    return(
        <BrowserRouter>
           <Header/>
            <Routes>
                 
                <Route path="/" element={<Home />} />
                
                <Route path="/sobrenos" element={<About />} />
                <Route path="/produtos" element ={<Products />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}