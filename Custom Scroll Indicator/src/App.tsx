import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  const [products, setProducts] = useState([]);
  const ulRefs = useRef([]);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data['products']);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const totalHeight = ulRefs.current.reduce((acc, item) => {
      return acc + (item ? item.scrollHeight : 0);
    }, 0);


    setHeight(totalHeight);
  }, [products]);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const totalScrollable = height - windowHeight;
      const scolledPercentage = (scrollTop / totalScrollable) * 100
      console.log(scolledPercentage)
      setWidth((scrollTop / totalScrollable) * 100)


      // const scrollIndicatorWidth = (scrollTop / (height - windowHeight)) * 100;

      // document.getElementById('scrollIndicator').style.width = `${scolledPercentage}%`;




    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [height]);

  return (
    <div>

      <div style={{ position: 'fixed', width: '100%' }}>
        <h1 style={{ backgroundColor: 'green', padding: '20px 0', textAlign: 'center' }}>
          Custom Scroll Indicator
        </h1>
        <hr id="scrollIndicator" style={{ backgroundColor: '#90EE90', height: 10, width: `${width}%` }} />
      </div>
      <h1>sdfhsfdsh</h1>
      {products.map((ele, index) => (
        <ul
          key={index}
          ref={el => ulRefs.current[index] = el}
          style={{ backgroundColor: 'red', }}
        >
          <li style={{ padding: '20px 0' }}>{ele.title}</li>
        </ul>
      ))}

      <MyComponent />
    </div>
  );
}

export default App;
