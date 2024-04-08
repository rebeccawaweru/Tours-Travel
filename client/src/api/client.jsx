import axios from 'axios'

export default axios.create({
    baseURL:"https://tours-travel-production.up.railway.app",
    maxRedirects: 0,
})

// https://tours-travel-production.up.railway.app
