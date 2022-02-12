import React, { useState } from 'react';
import UserList from './components/Users/UserList';
import AddUser from './components/Users/AddUser';

function App() {

  const [existingUsers, setNewUser] = useState([]);

  const addNewUserHandler = (userName, userAge) => {
    setNewUser(prevUsers => {
      return [...prevUsers, { name: userName, age: userAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addNewUserHandler} />
      <UserList users={existingUsers} />
    </div>
  );
}

export default App;
