import { API } from './apiTypes'
import axios from 'axios'

const api: API = {
  search: async query => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/api/v1/person/search/${query}`)
    return response.data
  },
  fetchDetail: async id => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/api/v1/person/detail/${id}`)
    return response.data
  },
  fetchNews: async (fullName, party, searchQuery) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/api/v1/news/monitora`, {
      data: {
        name: fullName,
        party: party,
        search_query: searchQuery, // eslint-disable-line @typescript-eslint/camelcase
      },
    })
    return response.data
  },
  fetchDemagog: async id => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/api/v1/demagog/${id}`)
    return response.data
  },
}

export default api
