import actionTypes from "./actionTypes";
import { apiCategory } from "../../services/category";
import * as aps from "../../services"

export const getCurrent = () => async (dispatch) => {
  try {
    const response = await aps.apiGetCurrent();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_CURRENT,
        currentData: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_CURRENT,
        msg: response.data.msg,
        currentData:null
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CURRENT,
      currentData: null,
      msg: error,
    });
  }
};