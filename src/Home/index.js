import { useState,useEffect, } from "react"
import React from "react"
import { motion } from "framer-motion"
import Image1 from '../img/Opera Instantâneo_2022-11-07_164832_www.magazineluiza.com.br.png'
import Image2  from '../img/Opera Instantâneo_2022-11-07_164855_www.magazineluiza.com.br.png'
import Image3  from '../img/Opera Instantâneo_2022-11-07_171256_www.magazineluiza.com.br.png'
import Image4  from '../img/Opera Instantâneo_2022-11-07_172415_www.magazineluiza.com.br.png'

const images = [Image1,Image2,Image3,Image4] 
export const Home = () => {
   
   function App() {}
   
    return(
        <>
    <motion.div className="carousel1" whileTap={{cursor:"grabbing"}}>
    <motion.div 
    className="inner"
    drag='x'
    >
     
        {images.map(image => (
           <motion.div className="item"key={image}>
            <img src={image} alt ="Texto alt"/>
           </motion.div>
        ))}

    </motion.div>
    </motion.div>
        <h1>Sou o Home</h1>
        <h1>Sou o Home</h1>
        <h1>Sou o Home</h1> <h1>Sou o Home</h1>
        <h1>Sou o Home</h1>
        <h1>Sou o Home</h1>
        <h1>Sou o Home</h1>
        <h1>Sou o Home</h1>
        <h1>Sou o Home</h1>
        <h1>Sou o Home</h1>

        </>
    )
}