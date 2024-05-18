import actionTypes from "./actionTypes";
import { apiGetPosts,apiGetPostsLimit } from "../../services/post";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS,
        posts: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS,
      posts: null,
    });
  }
};

export const getPostsLimit = (payload) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit(payload);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POST_LIMIT,
        posts: response.data.response?.rows,
        count: response.data.response?.count
      });
    } else {
      dispatch({
        type: actionTypes.GET_POST_LIMIT,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POST_LIMIT,
      posts: null,
    });
  }
};