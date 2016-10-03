import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Button } from 'react-bootstrap'
import { createStore } from 'redux';
import App from './App';

const DEFAULT_CATEGORY = "colors";

const CATEGORIES = {"fruit" :
    [{id:1,name:"apples"},
    {id:2,name:"oranges"},
    {id:3,name:"bananas"},
    {id:4,name:"grapes"}],
  "colors" :
    [{id:1,name:"red"},
    {id:2,name:"green"},
    {id:3,name:"blue"},
    {id:4,name:"orange"}]};

const reducerSelectedCategory = (state=DEFAULT_CATEGORY, action) => {
  return (CATEGORIES[action.type] === undefined) ? DEFAULT_CATEGORY : action.type;
};

const appComponent = render(
  <App items={CATEGORIES[DEFAULT_CATEGORY]}/>,
  document.getElementById('listGroup')
);

let store = createStore(reducerSelectedCategory);

store.subscribe(() => {
  appComponent.setState({items: CATEGORIES[store.getState()]});
});

const handleDisplayFruit = () => {
  store.dispatch({type: 'fruit'});
};

const handleDisplayColor = () => {
  store.dispatch({type: 'colors'});
};

const ButtonComponents = () => (<div><Button onClick={handleDisplayFruit}>Display fruit</Button>
  <Button onClick={handleDisplayColor}>Display color</Button></div>)
render(<ButtonComponents/>,
  document.getElementById('changeButton'));
