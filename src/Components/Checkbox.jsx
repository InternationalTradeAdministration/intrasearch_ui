import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAppliedFilters } from '../store/actions/paramHandlers';
import * as queryString from 'query-string';
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
    const { name, value } = event.target
    this.setState({isChecked: !this.state.isChecked}, () => { 
      this.props.toggleFilter(name, value, this.props.location.search)
    })
  }

  componentDidMount() {
    if (getAppliedFilters(this.props.location.search)[this.props.category]) {
      if (getAppliedFilters(this.props.location.search)[this.props.category].includes(this.props.item)) {
        this.setState({ isChecked: true })
      } else { 
        this.setState({ isChecked: false })
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if ( queryString.parse(this.props.location.search).q !== queryString.parse(prevProps.location.search).q ) {
      /* If we change the query term, reset the checkboxes status */
      this.setState({ isChecked: false })
    } else if ((this.props.uniqStr) !== (prevProps.uniqStr)) {
      /* uniqStr changes when the 'Clear All' button is clicked */
      this.setState({ isChecked: false })
    }
  }

  snakeToTitleCase (snake) {
    return snake.replace(/([_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('_', ' ');
    }).replace(/(^[a-z]{1})/ig, ($1) => {
      return $1.toUpperCase()
    })
  }

  render() {
    const { key, category, item } = this.props;
    return (
      <label key={key}>
        <input type="checkbox" name={category} value={item} key={key} onChange={(event) => this.handleToggleFilter(event)} checked={this.state.isChecked} /> {(category === "types") ? (this.snakeToTitleCase(item)) : (item)}
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
