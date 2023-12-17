import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios';

const Home = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    // const getRandomNumber=()=>{
    //     console.log("Hello")
    //     const number = Math.ceil(Math.random() * 20)
    //     setCount(number)
    // }

    useEffect(() => {
        const storedName = localStorage.getItem('randomName');
        if (storedName) {
          setName(storedName);
          setButtonClicked(true);
        }
      }, []);


      const getRandomName = async() => {
        // const randomIndex = Math.floor(Math.random() * namesList.length);
        // const selectedName = namesList[randomIndex];
        // setName(selectedName);
        // // setButtonClicked(true);
        // setCount(count+1)

        if (!buttonClicked) {

            setButtonClicked(true);
            setName('Loading...');
            
           setTimeout(async() =>{
            try {
                const response = await axios.get('http://localhost:4500/names/');
                const { pro } = response.data;
                console.log(pro)
                if (Array.isArray(pro) && pro.length > 0) {
                  const randomIndex = Math.floor(Math.random() * pro.length);
                  const selectedName = pro[randomIndex].name;
                  setName(selectedName);
                  localStorage.setItem('randomName', selectedName); // Store name in localStorage
                }
        
              } catch (error) {
                console.error('Error fetching data from API:', error);
              }
              
           },3000)
          }
      };

  return (
    <div className='container'>
        <div className="card">
            <h1>Random Number</h1>
            <p>Generate a random number</p>
            <button onClick={getRandomName} disabled={count >= 1}>Click Here</button>
            <p className='counter'>{name}</p>
        </div>
      
    </div>
  )
}

export default Home
