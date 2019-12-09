import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { IoMdSearch } from 'react-icons/io'
import * as queryString from 'query-string';
import * as actionCreators from '../store/actions/index';
import ResultsContainer from './ResultsContainer';

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
    }
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push({ search: `q=${this.state.searchQuery}`});
    // this.props.fetchNewQuery(this.state.searchQuery); /* this would make it fetch twice */
  }

  render() {
    const parsed = queryString.parse(this.props.location.search);
    // console.log(parsed)
    const queryTerm = parsed.q;

    return (
      <div>
        { queryTerm ? (
          <p className="searchMessage">Search Results for <strong className="searchMessageKeyword">{queryTerm}</strong></p>
        ) : null }
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text" 
            name="searchQuery"
            aria-label="Enter search query"
            placeholder="Enter search query"
            value={this.state.searchQuery}
            onChange={(event) => this.handleChangeInput(event)}
          />
          <button type="submit" aria-label="submit"><IoMdSearch size="2em"/></button>
        </form>
        { queryTerm ? (
          <ResultsContainer searchQuery={parsed}/>
        ) : null }
      </div>
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
    fetchNewQuery: (searchQuery) => dispatch(actionCreators.fetchNewQuery(searchQuery)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormContainer));