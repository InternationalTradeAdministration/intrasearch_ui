import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as queryString from 'query-string';
import CheckboxCategory from './CheckboxCategory';
import './styles/FiltersContainer.scss';
import * as actionCreators from '../store/actions/index';
require('details-polyfill')

function FiltersContainer(props) {

  const CATEGORIES_ORDER = {
    'trade_topics': 1,
    'types': 2,
    'industries': 3,
    'countries': 4
  }

  function listCategories() {
    let categories = []
      Object.entries(props.aggregations).forEach(
        ([key, value]) => categories.push(key)
      )
    return categories.sort((a, b) => CATEGORIES_ORDER[a] > CATEGORIES_ORDER[b] ? 1 : -1)
  }

  const [uniqStr, setStr] = useState(0);

  function handleClearFilters() {
    props.clearFilters(queryString.parse(props.location.search).q);
    setStr(Date.now())
    /* When click 'Clear All', update uniqStr with the current datetime, and pass it down to the checkbox.  When that changes, the box unchecks. */
    /* It's wierd, I know.  But "document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false )" doesn't work because they're controlled components and are not connected to the redux store */
  }

  function filterItemsForMarketIntel(category, items) {
    if (category === 'types') {
      return items.filter(obj => obj['value'] === 'market_intelligence')
    } else { return items }
  }

  function filterCategories() {
    return (
      // eslint-disable-next-line array-callback-return
      listCategories().map((cat, i) => {
        if (props.aggregations[cat].length) {
          const items = filterItemsForMarketIntel(cat, props.aggregations[cat])
          return (<CheckboxCategory category={cat} key={i} items={items} limit={5} uniqStr={uniqStr} />)
        }
      })
    )
  }

  return(
    <div className='FiltersContainer col-3'>
      { (props.aggregations !== {}) ? (
        <>
          <div><h2>Filter Results</h2><button onClick={() => handleClearFilters()}>[Clear All]</button></div>
          {filterCategories()}
        </>
      ) : null }
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    clearFilters: (searchQuery) => dispatch(actionCreators.clearFilters(searchQuery)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(FiltersContainer));
