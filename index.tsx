import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import CoverImageView from './CoverImageView';
import './style.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const retryLoading = () => {
    console.log('retrying...');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(false);
    }, 1000);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fafafa'
      }}
    >
      <CoverImageView
        imgSrc={
          'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
        }
      />
      {error && !loading ? (
        <div
          style={{
            paddingLeft: 16,
            color: '#d8000c',
            position: 'relative',
            top: '80px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <p>{'Unexpected error'}</p>
          <span
            style={{ marginLeft: '.5em', cursor: 'pointer' }}
            onClick={retryLoading}
          >
            🔁
          </span>
        </div>
      ) : loading ? (
        <p
          style={{
            paddingLeft: 16,
            position: 'relative',
            top: '80px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Loading...
        </p>
      ) : (
        <div
          style={{
            marginLeft: 32,
            marginRight: 32,
            backgroundColor: '#fafafa',
            borderRadius: 12,
            border: '1px solid #c8c8c8',
            padding: 16,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h2>{'Card Title'}</h2>
          <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
        </div>
      )}
    </div>
  );
};

render(<App />, document.getElementById('root'));
