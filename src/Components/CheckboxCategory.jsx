import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as queryString from 'query-string';
import { getAppliedFilters } from '../store/actions/paramHandlers';
import * as actionCreators from '../store/actions/index';
require('details-polyfill')

class CheckboxCategory extends Component {
  constructor(props){
    super(props)
    this.state = {
      showAll: false,
    }
  }

  resetToggle() {
    this.setState({ showAll: false });
  }

  componentDidUpdate(prevProps, prevState) {
    if (queryString.parse(this.props.location.search).q !== queryString.parse(prevProps.location.search).q) {
      /* If we start with a new query term, reset the showAll toggles, otherwise leave them to the user */
      this.resetToggle();
    }
  }

  toggleShowAll(e) {
    e.preventDefault();
    this.setState({ showAll: !this.state.showAll });
  }

  toggleShowButton(length) {
    const { showAll } = this.state;
    const showAllText = showAll ? '- Show Less' : '+ Show More';

    if (length <= this.props.limit) return null;

    return (
      <button onClick={(e)=>this.toggleShowAll(e)} className="toggleShow">{ showAllText }</button>
    );
  }

  handleToggleFilter(event) {
    this.props.toggleFilter(event, this.props.location.search)
  }
  
  isChecked(item) {
    if (getAppliedFilters(this.props.location.search)[this.props.category]) {
      if (getAppliedFilters(this.props.location.search)[this.props.category].includes(item["key"])) {
        return true
      } else { return false }
    }
  }

  render() {
    return (
      <details className="FilterCategory" open>
      <summary>{filterTitles[this.props.category]}</summary>

      { ((this.props.items.length > this.props.limit) && (!this.state.showAll)) ? (
        this.props.items.sort((a, b) => a["key"] > b["key"] ? 1 : -1).slice(0, this.props.limit).map((item, i) => {
          return (
            <label key={i}>
              <input type="checkbox" name={this.props.category} value={item["key"]} key={i} onChange={(event) => this.handleToggleFilter(event)} checked={this.isChecked(item)} /> {item["key"]}: {item["doc_count"]}
            </label>
          )
        })
      ) : (
        this.props.items.sort((a, b) => a["key"] > b["key"] ? 1 : -1).map((item, i) => {
          return (
            <label key={i}>
              <input type="checkbox" name={this.props.category} value={item["key"]} key={i} onChange={(event) => this.handleToggleFilter(event)} checked={this.isChecked(item)} /> {item["key"]}: {item["doc_count"]}
            </label>
          )
        })
      )}
      {this.toggleShowButton(this.props.items.length)}
      </details>

    )
  }
}

const mapStateToProps = state => {
  return {
    resultState: state.resultState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: (event, searchQuery) => dispatch(actionCreators.toggleFilter(event, searchQuery)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckboxCategory));

const filterTitles = {
  trade_topics: "Trade Topics",
  industries: "Industries",
  countries: "Countries",
}
