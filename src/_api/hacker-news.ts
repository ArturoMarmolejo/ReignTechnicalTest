import axios from "axios";

const getPostsApi = async (query: string, page: number) => {
  
  try {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`)
    return response.data.hits
  } catch (error: any) {
    throw {message: 'There was an error while obtaining response', error}
  }
} 

export default getPostsApi
