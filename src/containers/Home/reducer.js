import { getShowcases } from './actions';

export const initialState = {
  loading: false,
  fetched: false,
  error: null,
  showcases: [],
};

const showcasesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case getShowcases.REQUEST:
      return {
        ...state,
        loading: true
      };
      break;

    case getShowcases.SUCCESS:
      
      return {
        ...state,
        loading: false,
        fetched: true,
        showcases: payload.data
      }
      break;

    case getShowcases.FAILURE:
      return {
        ...state,
        loading: false,
        fetched: false,
        showcases: payload
      }
      break;
    default: // need this for default case
      return state
  }
};

export default showcasesReducer;
