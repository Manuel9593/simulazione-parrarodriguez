import axios from "axios"

export const instance = axios.create({
    baseURL: "https://www.omdbapi.com",
    headers: {
        'Accept': 'application/json'
    }
})