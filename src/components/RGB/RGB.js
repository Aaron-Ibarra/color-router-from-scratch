import React from 'react';
import { useParams } from 'react-router-dom';

export default function RGB() {
  const { r, g, b } = useParams();
  const color = `rgb(${r}, ${g}, ${b} )`;
  return (
    <div
      className="color"
      style={{
        backgroundColor: color,
        height: '100vh',
        width: '100vh',
      }}
    >
      <p>{color}</p>
    </div>
  );
}
