import * as services from "../services"
import { internalServerError } from "../helpers/handdle_errors"

export const getCurrent = async(req,res,next) =>{
    const { id } = req.user
    try {
        const response = await services.getOne(id)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res);
    }
}