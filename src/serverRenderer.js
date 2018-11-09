import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store/configureStore';
/*eslint-disable */
function renderHTML(html, preloadedState) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8" />
            
            <title>(\\/)(>,..,<)(\\/)</title> 
            <link rel="shortcut icon" href="/favicon.ico"/>
            ${
              process.env.NODE_ENV === 'development'
                ? ''
                : '<link href="/main.css" rel="stylesheet" type="text/css">'
            }
            <link rel="icon" href="/favicon.ico" type="image/x-icon">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
            #root{
                display: flex;
                flex-direction: column;
                min-height: 100vh; 
            }
            </style>
        </head>
        <body>
            <div id="root" class="root">${html}</div>
            <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}
          </script>
          <script src="/src/main.js"></script>
        </body>
        </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    
    const { store } = configureStore();
    
    // This context object contains the results of the render
    const context = {};
    const app = (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );
    /* eslint-enable */
    store.runSaga().done.then(() => {
      const htmlString = renderToString(app);
      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, preloadedState));
    });

    // Do first render, starts initial actions.
    renderToString(app);
    // When the first render is finished, send the END action to redux-saga.
    store.close();
  };
}
