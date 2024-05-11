import * as services from "../services"
import { internalServerError } from "../helpers/handdle_errors"

export const getAllAreas = async(req,res,next) =>{
    try {
        const response = await services.getAreasSerVice();
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res);
    }
}