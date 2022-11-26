import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  CHANGE_TITLE_FILTER,
} from "../constants/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload[0].tags,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case CHANGE_TITLE_FILTER:
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
};

export default reducer;
