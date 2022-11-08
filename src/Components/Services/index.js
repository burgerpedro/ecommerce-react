
import axios from "axios"

export const apiLocal = axios.create({
    baseURL: "http://localhost:8080"
})


export const apiGit = axios.create({
    baseURL:"https://api.github.com/users"

})

