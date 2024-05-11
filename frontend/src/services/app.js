import axios from "../axiosConfig"

export const apiGetPrices = () => new Promise(async(resolve, reject) => {
  try {
    const response = await axios({
        method: 'GET',
        url:'/api/v1/price/all'
    })
    resolve(response)
  } catch (error) {
    reject(error)
  }
})