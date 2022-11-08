import React from "react";
import { useNavigate } from "react-router-dom";
import {Container, Button, Input} from "./style.js"

export const Login = () => {
    
    let navigate = useNavigate()


    function goHome(){
        navigate("/")
       }
       
       function goAdm(){
        navigate("/cadastro")
       }
       
    function logar(){

        var login = document.getElementById('login').value;
        var senha = document.getElementById('senha').value;

        if(login == "admin@adm.com" && senha == "admin"){
            alert('Bem vindo ao Painel Administrativo')
            goAdm()
          }else if(login == "grupo6@serratec.com" && senha == "123"){
            alert(`Bem vindo`)
            goHome()
            }else{
                alert('Usuario ou senha incorretos')
            }

    }


    return(
        <>
            <Container>
                <div>
                    <div>E-mail:</div>
                    <Input type="text" placeholder="Digite seu e-mail" required 
                    pattern="[a-z0-9.]+@[a-z0-9]+\.[a-z]" id="login"></Input>
                    <div>Senha:</div>
                    <Input type="password" placeholder="Digite sua senha" required id="senha"></Input>
                    <hr></hr>
                    <div><Button onClick={logar}>Login</Button>
                    &nbsp;
                    <Button>Limpar</Button></div>
                </div>
            </Container>
        </>
    )
}