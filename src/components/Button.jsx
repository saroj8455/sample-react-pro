import React from 'react';

export default function Button({ label, handelClick }) {
  return <button onClick={handelClick}>{label || 'default button'}</button>;
}
