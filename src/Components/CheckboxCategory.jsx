import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as queryString from 'query-string';
import Checkbox from './Checkbox';
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

  render() {
    const itemArray = this.props.items.sort((a, b) => a["key"] > b["key"] ? 1 : -1).map(i => i["key"]);
    const uniqItemArray = [...new Set(itemArray)]
    return (

      (uniqItemArray.length === 0) ? ( null ) : (

        <details className="FilterCategory" open>
        <summary id={filterTitles[this.props.category]}>{filterTitles[this.props.category]}</summary>

        { ((uniqItemArray.length > this.props.limit) && (!this.state.showAll)) ? (
          uniqItemArray.slice(0, this.props.limit).map((item, i) => {
            return <Checkbox key={i} category={this.props.category} item={item} uniqStr={this.props.uniqStr}/>
          })
        ) : (
          uniqItemArray.map((item, i) => {
            return <Checkbox key={i} category={this.props.category} item={item} uniqStr={this.props.uniqStr}/>
          })
        )}
        {this.toggleShowButton(uniqItemArray.length)}
        </details>
      )

    )
  }
}

export default withRouter(CheckboxCategory);

const filterTitles = {
  trade_topics: "Trade Topics",
  industries: "Industries",
  countries: "Countries",
  types: "Type",
}
