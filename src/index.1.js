import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Alfredo',
  lastName: 'Rivera'
};


function sumar() {
	var suma = 5+5;
	return suma;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const element = (
	<div>
	  <h1>
	    Hello, {formatName(user)}!
	  </h1>
	  <h1>
	    Hello, {sumar()}
	  </h1>
	    {getGreeting()}
	</div>
);

ReactDOM.render(element, 
	document.getElementById('root'));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);