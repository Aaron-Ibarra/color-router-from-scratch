import React from 'react';
import './RGB.css';
import { useParams } from 'react-router-dom';

export default function RGB() {
  const { r, g, b } = useParams();
  const color = `rgb(${r}, ${g}, ${b} )`;
  return (
    <>
      <section className="color-wheel">
        <div
          className="color"
          style={{
            backgroundColor: color,
            height: '500px',
            width: '500px',
          }}
        >
          <h1 className="value">{color}</h1>
        </div>
      </section>
    </>
  );
}
