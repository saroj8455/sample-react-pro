import React from 'react';
import Container from './Container';
import { uid } from '../common';

export default function Welcome({ sendProfileId }) {
  const handelClick = () => {
    sendProfileId(uid());
  };

  return (
    <Container>
      <h1>Vite + React</h1>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handelClick}>Send Profile ID</button>
    </Container>
  );
}
