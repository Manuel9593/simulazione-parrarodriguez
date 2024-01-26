import axios from "axios"
import "dotenv/config"

axios.defaults.baseURL = "https://www.omdbapi.com"
axios.defaults.headers['Accept'] = 'application/json'