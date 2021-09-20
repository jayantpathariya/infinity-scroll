import './App.scss';
import Image from './components/Image';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [content, setContent] = useState({});

  const fetchContent = async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/photos');
    const data = res.data;
    setContent(data);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  console.log(content);
  return (
    <div className="app">
      <h1>Infinity Scroll</h1>
      {content.length > 0 &&
        content.map((img) => <Image key={img.id} {...img} />)}
    </div>
  );
}

export default App;
