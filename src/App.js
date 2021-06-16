import React, {useState, useEffect} from 'react'
import CardList from './components/card-list/CardList'
import './App.css'


function App() {
  const [state, setState] = useState({monsters: []})

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setState({monsters: users}));
  }, [])
  


  return (
    <>
    <div className="App">
      <CardList monsters = {state.monsters} />
    </div>
       
    </>
  );
};
export default App;
