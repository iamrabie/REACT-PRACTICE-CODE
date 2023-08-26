import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/card.component';
import SearchField from './components/search-field.component';
import Temp_Block from './components/temp-block.component';
import Temp_Card from './components/temp-card.component';
import './App.css';
let id;

function App() {
  const [data, setData] = useState([]);
  const [key, setKey] = useState('Lahore');
  const url = `https://api.weatherapi.com/v1/forecast.json?key=d78a0366e9df4f329dd111320230108&q=${key}&aqi=no&days=4`;

  const fetchInfo = () => {
    return axios.get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const sendDataToParents = (index) =>
  {
   /*  console.log('index' , index); */
    setKey(index);
  }
  

  useEffect(() => {
    fetchInfo();
  }, [key]); 
  // Run the effect when the key changes

  return (
    <div className='main-container' style={{ height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Card>
        <SearchField sendDataToParents = { sendDataToParents }/>
        <Temp_Block data = {data} />
        <Temp_Card data = {data} />     
      </Card>
    </div>
  );
}

export default App;
