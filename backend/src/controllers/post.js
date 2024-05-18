import * as services from "../services";

export const getPosts = async(req,res,next) => {
    try {
        const response = await services.getPostsService();
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:'Failed at controller posts : '+ error
        })
    }
}

export const getLimitPost = async(req,res,next) => {
    try {
        const { page,...query } = req.query;
        const response = await services.getPostsLimitService(page,query);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:'Failed at controller posts : '+ error
        })
    }
}