import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as queryString from 'query-string';
import CheckboxCategory from './CheckboxCategory';
import './styles/FiltersContainer.scss';
import * as actionCreators from '../store/actions/index';
require('details-polyfill')

function FiltersContainer(props) {

  function listCategories() {
    let categories = []
      Object.entries(props.aggregations).forEach(
        ([key, value]) => categories.push(key)
      )
    return categories
  }

  function handleClearFilters() {
    props.clearFilters(queryString.parse(props.location.search).q);
  }

  function filterCategories() {
    return (
      // eslint-disable-next-line array-callback-return
      listCategories().map((cat, i) => {
        if (props.aggregations[cat].length) {
          return (<CheckboxCategory category={cat} key={i} items={props.aggregations[cat]} limit={5}/>)
        }
      })
    )
  }
  
  return(
    <div className="FiltersContainer">
      { (props.aggregations !== {}) ? (
        <>
          <div><h2>Filter Results</h2><button onClick={() => handleClearFilters()}>[Clear All]</button></div>
          {filterCategories()}
        </>
      ) : null }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    resultState: state.resultState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearFilters: (searchQuery) => dispatch(actionCreators.clearFilters(searchQuery)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FiltersContainer));
