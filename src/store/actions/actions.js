import * as actionTypes from './actionTypes'
import config from '../../API/config.js'
import * as queryString from 'query-string';
import { getAppliedFilters, updateFilters } from './paramHandlers';
import { history } from '../../index';

export const clearFilters = (searchQuery) => {
  history.push({ search: `q=${searchQuery}`}); /* clear applied filters from the URL */
  return (dispatch) => {
    return fetch(`${config.url}?q=${searchQuery}&api_key=${config.apiKey}&size=10&offset=0`)
    .then(response => response.json())
    .then(response => dispatch({ 
      type: actionTypes.FETCH_NEW_QUERY, 
      response: response,
    }));
  }
}

export const toggleFilter = (category, value, query_string) => {

  let newFilters = updateFilters(category, value, query_string);

  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING_RESULTS })

    let params = queryString.stringify(newFilters, {arrayFormat: 'comma'});
    let searchQuery = queryString.parse(query_string).q; //want query term from the original string

    history.push({ search: `q=${searchQuery}&${params}` });

    return fetch(`${config.url}?q=${searchQuery}&${params}&api_key=${config.apiKey}&size=10&offset=0`)
      .then(response => response.json())
      .then(response => dispatch(updateAggregations(`q=${searchQuery}&${params}`, response, category)));
  }
}

export const updateAggregations = (query_string, response, category) => {
  return (dispatch) => {
    let aggsToUpdate = [];
    const categories_array = ['trade_topics', 'industries', 'countries'];

    categories_array.forEach(
      (cat) => {
        /* add categories to the list if they were not the subject of the toggle, or if the category is/becomes empty */
        if ( (cat !== category) || ((Object.keys(getAppliedFilters(query_string)))===[]) || (!(getAppliedFilters(query_string)[cat])) ) {
          aggsToUpdate.push(cat)
        }
      }
    )
    dispatch({ type: actionTypes.FETCH_WITH_FILTERS, response: response });
    
    aggsToUpdate.forEach(agg => {
      let existingFilters = []
      if (getAppliedFilters(query_string)[agg]) {
        existingFilters = getAppliedFilters(query_string)[agg].map((item) => {
          return {key: item}
        })
        // console.log('🧬existingFilters: ', existingFilters)
      }
      dispatch({ type: actionTypes.UPDATE_SOME_AGGREGATIONS, aggregations: response.aggregations, aggregation: agg, existingFilters: existingFilters });
    })
  }
}

export const fetchNewQuery = (query_string, activePage=1) => {
  document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
  
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING_RESULTS });
    
    return fetch(`${config.url}${query_string}&api_key=${config.apiKey}&size=10&offset=${(activePage-1)*10}`) /* query_string came from `this.props.location.search`, so it already has the leading `?` */
      .then(response => response.json())
      .then(response => dispatch({ 
        type: actionTypes.FETCH_NEW_QUERY, 
        response: response,
      }));
  }
}

export const fetchNewPage = (query_string, pageNumber) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_PAGE_NUMBER, pageNumber: pageNumber });
    
    return fetch(`${config.url}${query_string}&api_key=${config.apiKey}&size=10&offset=${(pageNumber-1)*10}`) /* query_string came from `this.props.location.search`, so it already has the leading `?` */
      .then(response => response.json())
      .then(response => dispatch({ 
        type: actionTypes.FETCH_NEW_PAGE, 
        response: response,
      }));
  }
}
