import React from 'react'
import UserItem from './UserItem'

export default function UsersContainer({users, showToggle, deleteUser}) {

  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    grisAutoRows: '450px',
    gap: '10px',
    margin: '30px'

  }

  return (
    <div style={style}>
      {users.length === 0 
        ? <p>no users =( </p>
        : users.map(user => 
            <UserItem 
                key={user.id} 
                showToggle={showToggle} 
                deleteUser={deleteUser}
                {...user}
                />)
      }
    </div>
  )
}
