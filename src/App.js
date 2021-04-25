import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import Person from './Component/Person/Person';
import personData from './Component/fakeData/fakeData.json'

function App() {
  // const [person, setPerson] = useState([]);
  
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data=> setPerson(data))
  // }, [])

  const [person, setPerson] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(() => {
    setPerson(personData)
    
  },[])

  const handleAddPerson = (person) => {
    const newCart = [...cart,person];
    setCart(newCart);
  }
  return (
    <div className="App">
      <Cart cart={cart}></Cart>
      {
        person.map(person => 
        <Person 
          person={person}
          handleAddPerson={handleAddPerson}>
        </Person>)
      }
    </div>
  );
}

export default App;
