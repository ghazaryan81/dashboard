import "../../styles";

/*
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createBrowserHistory } from "history";
*/

/*
import { createStore } from 'redux';

function playlist(state = []) {
  return state;
}

const store = createStore(playlist);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });


reducer
action
store
getState
subscribe
dispatch


import {createStore} from "redux";

function anyReducer(state=[], action) {
 if (action.type === "Add") {
  return [...state, action.payload]
 }
 return state
}


list


*/

import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import SVGSpriteSrc from "~icons/sprite.s.svg";

interface SVGSpriteProps {
	name: string;
	width?: string | number;
	height?: string | number;
}

const SVGSprite: FC<SVGSpriteProps> = ({ name, width, height }) => (
	<svg
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width={width}
		height={height}
	>
		<use href={`${SVGSpriteSrc}#${name}`} />
	</svg>
);

const renderDOM = document.getElementById("root");
const renderRoot = ReactDOM.createRoot(renderDOM);

renderRoot.render(
	<>
		<div>HELLO</div>
	</>
);
