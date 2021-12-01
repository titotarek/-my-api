import axios from 'axios'
import { useState , useEffect} from 'react';
import './App.css';

import React from 'react'

 function App() {
  const[users, setUsers] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res.data)
      setUsers(res.data)
    }).catch(err => {
      console.log(err)
    })
  },[])
   
  
  return (
   
      <div>
        <div class="card" >
          {users.map((users, id) => {
            return(

              <div class="card-body" key={id}>
                    <p className="card title">{users.name}</p>
            <p className="card title">{users.phone}</p> 
            <p className="card title">{users.city}</p> 
            <p className="card title">{users.email}</p> 
            <p className="card title">{users.website}</p>  <br/>
              </div>
            )
          })}
          </div>
      </div>
        
   
  )
}
export default App