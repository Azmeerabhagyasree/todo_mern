import axios from "axios"
const instance = axios.create({
    baseURL:"https://todocrud-ra6v.onrender.com/api"
})
export default instance
