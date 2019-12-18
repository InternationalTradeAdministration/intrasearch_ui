import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAppliedFilters } from '../store/actions/paramHandlers';
import * as actionCreators from '../store/actions/index';

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: false,
    }
    this.handleToggleFilter = this.handleToggleFilter.bind(this);
  }


  handleToggleFilter(event) {
    event.preventDefault();
    const { name, value } = event.target
    // this.props.toggleFilter(name, value, this.props.location.search)
    this.setState({isChecked: !this.state.isChecked},
      () => { this.props.toggleFilter(name, value, this.props.location.search) }
    )
  }

  componentDidMount() {
    if (getAppliedFilters(this.props.location.search)[this.props.category]) {
      if (getAppliedFilters(this.props.location.search)[this.props.category].includes(this.props.item["key"])) {
        this.setState({ isChecked: true })
      } else { 
        this.setState({ isChecked: false })
      }
    }
  }

  render() {
    const { key, category, item } = this.props;
    const value = item["key"];
    return (
      <label key={key}>
        <input type="checkbox" name={category} value={value} key={key} onChange={(event) => this.handleToggleFilter(event)} checked={this.state.isChecked} /> {value}: {item["doc_count"]}
      </label>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: (category, value, query_string) => dispatch(actionCreators.toggleFilter(category, value, query_string)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Checkbox));
