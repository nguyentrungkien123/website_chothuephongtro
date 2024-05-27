import db from "../models";

export const getPostsService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest:true,
        include: [
          {model: db.Image,as:"images",attributes:["image"]},
          {model: db.Attribute,as:"attributes",attributes:["acreage","published","hashtag","price"]},
          {model: db.User,as:"user",attributes:["name","zalo","phone"]},
        ],
        attributes:["id","star","title","description","address"]
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed get posts",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

  export const getPostsLimitService = (page,{limitPost,...query}) =>
  new Promise(async (resolve, reject) => {
    try {
      const queries = {...query}
      const limit = +limitPost || +process.env.LIMIT
      queries.limit = limit
      let offset = (!page || +page<=1) ? 0 : (+page-1);
      // Dataabse
      const response = await db.Post.findAndCountAll({
        where:query,
        raw: true,
        nest:true,
        ...queries,
        offset: offset * limit,
        order:[['createdAt','DESC']],
        // limit: +process.env.LIMIT,
        include: [
          {model: db.Image,as:"images",attributes:["image"]},
          {model: db.Attribute,as:"attributes",attributes:["acreage","published","hashtag","price"]},
          {model: db.User,as:"user",attributes:["name","zalo","phone"]},
          {model:db.Overview,as:"overviews"}
        ],
        attributes:["id","star","title","description","address"]
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed get posts",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });


  export const getNewPostService = () =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await db.Post.findAll({
          raw: true,
          nest:true,
          offset:0,
          order:[['createdAt','DESC']],
          limit: +process.env.LIMIT,
          include: [
            {model: db.Image,as:"images",attributes:["image"]},
            {model: db.Attribute,as:"attributes",attributes:["acreage","published","hashtag","price"]},
            {model: db.User,as:"user",attributes:["name","zalo","phone"]},
            {model:db.Overview,as:"overviews"}
          ],
          attributes:["id","star","title","description","address","createdAt"]
        });
        resolve({
          err: response ? 0 : 1,
          msg: response ? "OK" : "Failed get posts",
          response,
        });
      } catch (error) {
        reject(error);
      }
    });