import React from 'react'
import ReactDOM from 'react-dom'

let renderFallback = {};

export const CreateUserApp = ({ options }) => {
  const { name } = options;
  return <div>hello {name}!</div>
}

export const render = (container, options) => {
    const CreateUser = () => (<CreateUserApp options={options}/>);
    return new Promise(resolve => {
        ReactDOM.render(<CreateUser />, container, () => {
          resolve();
          renderFallback = {
            container,
            options
          };
        });
      }
    );
};



