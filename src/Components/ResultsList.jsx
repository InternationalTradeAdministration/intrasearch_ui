import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles/ResultsList.scss';

function sanitize(text) {
    return text ? decodeEntity(text.replace(/[\s\r\n]+/g, ' ')) : null
}

function decodeEntity(html) {
    var textarea = document.createElement("textarea")
    textarea.innerHTML = html
    return textarea.value
}

const ResultsList = (props) => {

  return(
    <div className="ResultsList col-2of3">
      <p className="totalMessage"><strong>{props.total}</strong> results</p>

      { props.results.map(item => {
        return (
          <div className="anItem" key={item.id}>
            <a href={item.link}>{item.title}</a>
            <p>{sanitize(item.summary)}</p>
          </div>
        )
      }) }
    </div>
  )
}

export default withRouter(ResultsList);
