import axios from "axios"

export const fetchImages = async(value, page) => {
    try {
        const BASE_URL = 'https://pixabay.com/api/'
        const KEY = '32327461-3975e0cca8f9f86b28915263f'
        const url = `${BASE_URL}?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
        return axios.get(`${url}`)
          .then(response => response.data)     
    } catch (error) {
        console.log(error.message)
    }

}