import React from 'react';
import { render } from 'react-dom';

window.onload = () => {
  render(
    <div>Hello World</div>,
    document.getElementById('react'),
  );
};

if (module.hot) module.hot.accept(); // when app gets more complicated fix this line
