import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles/ResultsList.scss';

const ResultsList = (props) => {

  return(
    <div className="ResultsList">
      <p className="totalMessage"><strong>{props.total}</strong> results</p>
      
      { props.results.map(item => {
        return (
          <div className="anItem" key={item.id}>
            <a href={item.link}>{item.title}</a>
            <p>{item.summary}</p>
          </div>
        )
      }) }
    </div>
  )
}

export default withRouter(ResultsList);