import actionTypes from "../actions/actionTypes";
const initState = {
  msg: "",
  categories:[],
  prices: []
};
const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
       case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        categories: action.categories || [],
        msg: action.msg || ''
      };
      case actionTypes.GET_PRICES:
       return {
         ...state,
         prices: action.prices || [],
         msg: action.msg || ''
       };
    case actionTypes.REGISTER_FAIL:
        case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        msg: action.data,
        token: null,
        update:!state.update
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn:false,
        token:null,
        msg:''
      }
    default:
      return state;
  }
};

export default appReducer;