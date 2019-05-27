import React, {useState} from 'react';
import Tweet from './Tweet';


function App() {

  const [users, setUsers] = useState([
    { name: "Sascha", message: "Hello folks"},
    { name: "John", message: "I am John Snow"},
    { name: "Tesla", message: "I like electricity"},
  ]);


  return(
    <div className="app">
    {users.map(user => (
      <Tweet name={user.name} message={user.message}/>
    ))}
    </div>
  );
}

export default App;