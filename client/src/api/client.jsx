import axios from 'axios'

export default axios.create({
    baseURL:"https://tours-travel-production.up.railway.app",
    maxRedirects: 0,
    validateStatus: function (status) {
        return status >= 200 && status < 400; // default
      },
})

// https://tours-travel-production.up.railway.app
