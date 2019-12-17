import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAppliedFilters } from '../store/actions/paramHandlers';
import * as actionCreators from '../store/actions/index';

class Checkbox extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   isChecked: false,
    // }
    this.handleToggleFilter = this.handleToggleFilter.bind(this);
    this.isChecked = this.isChecked.bind(this);
  }


  handleToggleFilter(event) {
    event.preventDefault();

    const { name, value } = event.target
    // console.log(`zero ${name}: ${value}`)
    this.props.toggleFilter(name, value, this.props.location.search)
    // this.setState({isChecked: !this.state.isChecked},
    //   () => { this.props.toggleFilter(name, value, this.props.location.search) }
    // )
  }
  
  isChecked(item) {
    if (getAppliedFilters(this.props.location.search)[this.props.category]) {
      if (getAppliedFilters(this.props.location.search)[this.props.category].includes(item["key"])) {
        return true
      } else { return false }
    }
  }

  render() {
    const { key, category, item } = this.props;
    const value = item["key"];
    return (
      <label key={key}>
        <input type="checkbox" name={category} value={value} key={key} onChange={(event) => this.handleToggleFilter(event)} checked={this.isChecked(item)} /> {value}: {item["doc_count"]}
      </label>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: (category, value, searchQuery) => dispatch(actionCreators.toggleFilter(category, value, searchQuery)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Checkbox));
