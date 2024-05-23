import logo from './logo.svg';
import { useRef, useState } from 'react';
import './App.css';
import ImageGrallery from './ImageGrallery';

function App() {
const[fetchData, setFetchData] = useState([]);
const ref = useRef();

const handleSubmit =(e)=>{
  e.preventDefault();
  console.log(ref.current.value);

  const endpointURL =
  `https://pixabay.com/api/?key=43990518-5f42f2539c4c76190f29c7217&q=${ref.current.value}&image_type=photo`;

  fetch(endpointURL)
  .then((res)=>{return res.json();})
  .then((data) => {
    console.log(data.hits);
    setFetchData(data.hits);
  });
}

  return (
    <div className="container">
    <h2>My Pixabay</h2>
    <form onSubmit ={(e) => handleSubmit(e)}>
      <input type="text" placeholder="画像検索" ref={ref}/>
    </form>
    <ImageGrallery fetchData={fetchData}/>
    </div>
  );
}

export default App;
