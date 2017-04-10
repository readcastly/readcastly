// ArticleList component (i.e., the container for Articles)
  // - a stateless component

import React from 'react';
import {Row} from 'react-bootstrap';
import ArticleEntry from './ArticleEntry.jsx';

function ArticleList(props) {
  let exportOptions = {
    voices : [
      {id: 1, name: 'Big Daddy'},
      {id: 2, name: 'Mama'},
      {id: 3, name: 'Little Brother'},
      {id: 4, name: 'Kid Sister'}
    ],
    methods : [
      {id: "stream", method: 'Stream It'},
      {id: "email", method: 'Email It'},
      {id: "phone", method: 'Text It'}
    ]
  }

	return (
		<Row className='list-group article-list'>
			{props.articles.map((article) => (
				<ArticleEntry key={article.id} article={article} user={props.user} exportOptions={exportOptions} deleteIt={props.deleteIt} convertIt={props.convertIt}/>
			))}
		</Row>
	);
}

export default ArticleList;