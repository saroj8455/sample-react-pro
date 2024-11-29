import React, { useState } from 'react';
import Container from './Container';

function User({ name }) {
  // Use optional chaining with fallback value to prevent errors from undefined and null or empty string
  console.log(name?.toUpperCase() || 'No Name Provided');

  return (
    <Container>
      <div className='card'>
        <h3>{name || 'No Name Provided!'}</h3>
      </div>
    </Container>
  );
}

export default React.memo(User);
