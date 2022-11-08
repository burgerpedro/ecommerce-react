import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    background-color: #ccc;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 35px;
    color:#111;
    border: 2px solid #999;
    border-radius: 0.4rem;
    transition: 0.5s all ease-out;
    &:hover{
        background-color: #555;
        color: #fff;    
    }
`
export const Input = styled.input`
        background-color: #999;
    &:hover {
            cursor: pointer;
            background-color: #fff;
        }
`
export const Button = styled.button`
        height: 40px;
        width: 120px;
        border-radius: 0.5rem;
    &:hover{
        background-color: #fff;
        color: #00f;
        size: 1.1rem;
    }
`