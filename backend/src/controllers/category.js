import * as services from "../services"

export const getCategory = async(req,res,next) => {
  try {
    const response = await services.getAllCategory();
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
        err: -1,
        msg : 'Failed to get category',
  })
  }
}