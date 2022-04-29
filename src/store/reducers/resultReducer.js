import * as actionTypes from '../actions/actionTypes';

const initialState = {
  total: 0,
  offset: 0,
  activePage: 1,
  results: [],
  aggregations: {},
  loading: false,
}

const resultReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.RELOADING_SAME_QUERY:
      return {
        ...state,
        loading: true,
        aggregations: {},
        activePage: 1
      }
    case actionTypes.LOADING_RESULTS:
      return {
        ...state,
        loading: true,
        activePage: 1
      }
    case actionTypes.FETCH_NEW_QUERY:
      return {
        ...state,
        loading: false,
        total: action.response.total,
        offset: action.response.offset,
        results: action.response.results,
        aggregations: action.response.aggregations,
        activePage: 1
      }
    case actionTypes.FETCH_WITH_FILTERS:
      return {
        ...state,
        loading: false,
        total: action.response.total,
        offset: action.response.offset,
        results: action.response.results,
      }
    case actionTypes.UPDATE_SOME_AGGREGATIONS:
      // console.log([action.aggregation], [...action.aggregations[action.aggregation], ...action.existingFilters])
      state.aggregations[action.aggregation] = action.aggregations[action.aggregation]
      return {
        ...state,
        aggregations: {
          ...state.aggregations,
          // need to spread in here the currently selected ones
          // [action.aggregation]: [...action.aggregations[action.aggregation], ...action.existingFilters]
          // [action.aggregation]: action.aggregations[action.aggregation]
        }
      }
    case actionTypes.UPDATE_ALL_AGGREGATIONS:
      return {
        ...state,
        aggregations: action.aggregations,
      }
    case actionTypes.UPDATE_PAGE_NUMBER:
      return {
        ...state,
        loading: true,
        activePage: action.pageNumber,
      }
    case actionTypes.FETCH_NEW_PAGE:
      return {
        ...state,
        loading: false,
        offset: action.response.offset,
        results: action.response.results
      }
    default:
      return state;
  }
};

export default resultReducer;
