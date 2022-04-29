import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as queryString from 'query-string';
import * as actionCreators from '../store/actions/index';
import Pagination from 'react-js-pagination';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import ResultsList from './ResultsList';
import FiltersContainer from './FiltersContainer';
import './styles/ResultsContainer.scss';

class ResultsContainer extends Component {

  getQueryTerm = () => queryString.parse(this.props.location.search).q;

  maxTotal() {
    return this.props.resultState.total > 1000 ? 1000 : this.props.resultState.total;
  }

  handlePageChange(pageNumber) {
    this.props.fetchNewPage(this.props.location.search, pageNumber)
  };

  componentDidMount() {
    this.props.fetchNewQuery(this.props.location.search)
  }

  componentDidUpdate(prevProps, prevState) {
    if (queryString.parse(this.props.location.search).q !== queryString.parse(prevProps.location.search).q) {
      this.props.fetchNewQuery(this.props.location.search)
    }
  }

  render() {
    // console.log('🍎', this.props.location.search) // `?q=banks&industries=Agribusiness,Automotive`
    // console.log('🍏', queryString.parse(this.props.location.search)) // { industries: "Agribusiness,Automotive", q: "banks" }
    return (
      <div className="ResultsContainer">

        <FiltersContainer aggregations={this.props.resultState.aggregations}/>

        <ReactPlaceholder
          type='text'
          showLoadingAnimation={true}
          ready={!this.props.resultState.loading}
          rows={6} style={{ width: '60vw', margin: '2em 0 0.5em 1em' }} color='#E0E0E0'
        >

          <ResultsList searchQuery={this.getQueryTerm()} total={this.props.resultState.total} results={this.props.resultState.results}/>

        </ReactPlaceholder>

        { (this.props.resultState.total > 0) ? (
          <Pagination
            activePage={this.props.resultState.activePage}
            totalItemsCount={this.maxTotal()}
            itemsCountPerPage={10}
            firstPageText="<<"
            prevPageText="<"
            nextPageText=">"
            lastPageText=">>"
            onChange={(pageNumber) => this.handlePageChange(pageNumber)}
          />
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
    fetchNewQuery: (query_string) => dispatch(actionCreators.fetchNewQuery(query_string)),
    fetchNewPage: (query_string, pageNumber) => dispatch(actionCreators.fetchNewPage(query_string, pageNumber))
  }
}

export default ResultsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultsContainer));
