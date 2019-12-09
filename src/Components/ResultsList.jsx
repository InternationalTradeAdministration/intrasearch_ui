import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles/ResultsList.scss';

const ResultsList = (props) => {

  return(
    <div className="ResultsList">
      <p className="totalMessage"><strong>{props.total}</strong> results</p>
      
      { props.results.map(item => {
        let updatedDate = new Date(parseInt(item.changed)).toDateString()
        return (
          <div className="anItem" key={item.id}>
            <a href={item.link}>{item.title}</a>
            <p>Updated {updatedDate}</p>
            <p>{item.summary}</p>
          </div>
        )
      }) }
    </div>
  )
}

export default withRouter(ResultsList);