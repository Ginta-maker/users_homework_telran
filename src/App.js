import { useState } from 'react';
import { data } from './users';
import Form from './Form';
import UsersContainer from './UsersContainer';



function App() {
  
  const [users, setUsers] = useState(data);

  const addUser = (name, avatar) => {
    const new_user = {
      id: Date.now(),
      name, avatar,
      hide: false
    }
    setUsers([...users, new_user]);
  }

  const deleteUser = (id) => {
    const new_users = users.filter(elem => elem.id !== id);
    setUsers(new_users);
  }

  const showToggle = (id) => {
    const new_users = users.map(elem => {
      if(id === elem.id) {
        elem.hide = !elem.hide;
      }
      return elem
    })
    setUsers(new_users);
  }
  
  return (
    <>
    <Form addUser={addUser}/>
    <UsersContainer 
      users={users} 
      showToggle={showToggle}
      deleteUser={deleteUser}
      />
    </>
  );
}

export default App;
