import * as actionTypes from './actionTypes'
import config from '../../API/config.js'
import * as queryString from 'query-string';
import { getAppliedFilters, updateFilters } from './paramHandlers';
import { history } from '../../index';

export const clearFilters = (searchQuery) => {
  let encodedQuery= encodeURIComponent(searchQuery);
  history.push({ search: `q=${encodedQuery}`}); /* clear applied filters from the URL */
  return (dispatch) => {
    return fetchWithQuery(`${config.url}?q=${encodedQuery}&size=10&offset=0`)
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
    let searchQuery = encodeURIComponent(queryString.parse(query_string).q); //want query term from the original string
    let encodedQueryString = `q=${searchQuery}&${params}`;

    history.push({ search: encodedQueryString });

    return fetchWithQuery(`${config.url}?${encodedQueryString}&size=10&offset=0`)
      .then(response => response.json())
      .then(response => dispatch(updateAggregations(encodedQueryString, response, category)));
  }
}

export const updateAggregations = (query_string, response, category) => {
  return (dispatch) => {
    let aggsToUpdate = [];
    const categories_array = ['trade_topics', 'industries', 'countries', 'types'];

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
          return {value: item}
        })
      }
      dispatch({ type: actionTypes.UPDATE_SOME_AGGREGATIONS, aggregations: response.aggregations, aggregation: agg, existingFilters: existingFilters });
    })
  }
}

export const fetchNewQuery = (query_string, activePage=1) => {
  history.push({ search: query_string });
  return (dispatch) => {
    dispatch({ type: actionTypes.RELOADING_SAME_QUERY });

    /* query_string came from `this.props.location.search`, so it already has the leading `?` */
    return fetchWithQuery(`${config.url}${query_string}&size=10&offset=${(activePage-1)*10}`)
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

    /* query_string came from `this.props.location.search`, so it already has the leading `?` */
    return fetchWithQuery(`${config.url}${query_string}&size=10&offset=${(pageNumber-1)*10}`)
      .then(response => response.json())
      .then(response => dispatch({
        type: actionTypes.FETCH_NEW_PAGE,
        response: response,
      }));
  }
}

export const fetchWithQuery = (query) => {
  return fetch(query, {
    headers: {
      'subscription-key': config.accessToken,
      'Cache-Control': 'no-cache'
    }
  })
}
