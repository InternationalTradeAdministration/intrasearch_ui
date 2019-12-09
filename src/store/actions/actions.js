import * as actionTypes from './actionTypes'
import config from '../../API/config.js'
import * as queryString from 'query-string';
import { getAppliedFilters, updateFilters } from './paramHandlers';
import { history } from '../../index';

export const clearFilters = (searchQuery) => {
  document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
  history.push({ search: `q=${searchQuery}`}); /* effectively clears the filters */
  return (dispatch) => {
    return fetch(`${config.url}?q=${searchQuery}&api_key=${config.apiKey}&size=10&offset=0`)
    .then(response => response.json())
    .then(response => dispatch({ 
      type: actionTypes.FETCH_NEW_QUERY, 
      response: response,
    }));
  }
}

export const toggleFilter = (event, query_string) => {
  const { name } = event.target;
  let newFilters = updateFilters(event, query_string);
  
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING_RESULTS })

    let params = queryString.stringify(newFilters, {arrayFormat: 'comma'});
    // console.log(params)
    let searchQuery = queryString.parse(query_string).q; //want query term from the original string

    history.push({ search: `q=${searchQuery}&${params}` });

    return fetch(`${config.url}?q=${searchQuery}&${params}&api_key=${config.apiKey}&size=10&offset=0`)
      .then(response => response.json())
      .then(response => dispatch(updateAggregations(`q=${searchQuery}&${params}`, response, name)));  
  }
}

export const updateAggregations = (query_string, response, category) => {

  return (dispatch) => {
    let aggsToUpdate = [];
    
    Object.entries(getAppliedFilters(query_string)).forEach(
      ([key, value]) => {
        /* add categories to the list if they were not the subject of the toggle, or if the category is/becomes empty */
        if (( key !== category ) || ( Object.entries(getAppliedFilters(query_string)[key]).toString() === '' )) {
          aggsToUpdate.push(key)
        }
      }
    )

    dispatch({ type: actionTypes.FETCH_WITH_FILTERS, response: response });
    
    aggsToUpdate.forEach(agg => {
      dispatch({ type: actionTypes.UPDATE_SOME_AGGREGATIONS, aggregations: response.aggregations, aggregation: agg });
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
