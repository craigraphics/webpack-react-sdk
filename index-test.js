import React from 'react'
import ReactDOM from 'react-dom'

export const sum = (nums = []) => nums.reduce((acc, el) => acc + el)

export function sayHi() {
    return 'hello world';
}

export const CreateUserApp = ({ options }) => {
  const { name } = options;
  return <div>hello {name}!</div>
}

export const createUserApi = (() => {
  let createUserContainer;
  let renderFallback = {};

  const renderApp = (container, options) => {
    // const { name } = options;
    const CreateUser = () => (<CreateUserWrapper options={options}/>);
    return new Promise(resolve => {
        ReactDOM.render(<CreateUser />, container, () => {
          resolve();
          renderFallback = {
            container,
            options
          };
          // window.adsk.CreateUser.renderFallback = {
          //   container,
          //   options
          // };
          // eventHandler && eventHandler({ type: 'info', event: 'ME_MENU_MOUNT ' });
          console.log('CreateUser mounted')
        });
      }
    );
  };


  const render = async (container, options = {}) => {
    // const { eventHandler, siteId, language, onSignOut, onSignIn, environment } = options;

    try {
      createUserContainer = container;
      await renderApp(createUserContainer, options);
    } catch (error) {
      // eventHandler && eventHandler({ type: 'error', event: 'INITIALIZATION_FAILED', message: error.message });
      console.log('Initialization failed')
    }
  };

  const unmount = () => {
    if (!createUserContainer) {
      return false;
    }

    const result = ReactDOM.unmountComponentAtNode(createUserContainer);
    createUserContainer = null;
    return result;
  };

  // const invalidateCache = () => {
   
  //   const {container, options} = window.adsk.meMenu.renderFallback;
  //   render(container, options).then(() => {
  //     options.eventHandler ?
  //       options.eventHandler({ type: 'info', event: 'INVALIDATED_CACHE', message: 'Cache invalidated and re-rendered' }) :
  //       console.info('Cache Invalidate and re-rendered');
  //   });
  // };

  return {
    render,
    unmount,
    renderFallback,
    // invalidateCache
  };
})();

// window.adsk.meMenu = {
//   ...(window.adsk.meMenu || {}),
//   ...createUserApi
// };

export default createUserApi;

