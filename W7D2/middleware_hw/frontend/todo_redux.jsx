import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// god damn works flawlessly love it
// function applyMiddlewares(store, ...middlewares) {
//   let dispatch = store.dispatch;
//   middlewares.forEach(middleware => {
//     dispatch = middleware(store)(dispatch); // ah amazing this returns then a function ready to take an action upon which it will execute everything in the middleware's code block and then return next(action) fantastic. Next is dispatch(action) in the logging function. If you were to chain it twice oh wow right it would keep adding the last middleware returned function as the next to each middleware in the chain so that the 'next' that is called next time is the last middleware added to the chain, the 'next' one to call, all the way until the dispatch is called. So the first middleware passed in here in the chain is the last one executed and the last one is the first executed wow amazing to get all that and to be able to read that deeply let's fucking do this thing fucking love it so grateful to be productive today and getting back into it all love this so much keep pushing man always keep pushing all the way until you get there cannot wait
//   });
//   return Object.assign({}, store, { dispatch }); // this will copy the store shallowly and then replace the dispatch key on the store object with the new dispatch method amazing lol really important to truly understand how all this works let's remember it for sure and keep killing it with all of this for sure
// }

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {}; // this is why semicolons are so awesome man can't wait to get way more into all of this again let's get to it so lucky keep pushing for sure it's fine to be 
  let store = configureStore(preloadedState);
  // store = applyMiddlewares(store, addLoggingToDispatch); // since applyMiddlewares returns basically a new store object with the new curried dispatch method amazing truly great what fantastic design
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

