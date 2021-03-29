import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const link = React.createElement('a',
  {
    href: 'https://reactjs.org/',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
  'Ссылка на reactjs.org',
);

console.log('link: ', link);

ReactDOM.render(<App />, document.getElementById('root'));

