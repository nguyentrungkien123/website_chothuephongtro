import * as services from "../services"
import { internalServerError } from "../helpers/handdle_errors"

export const getAllPrices = async(req,res,next) =>{
    try {
        const response = await services.getPricesSerVice();
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res);
    }
}