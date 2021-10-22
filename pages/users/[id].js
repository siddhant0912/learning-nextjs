import React from 'react'
import axios from 'axios'
const User = ({user}) => {
    if(user.error){
        return <div>{user.error}</div>
    }
    return (
        <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.name}</td>
          <td>{user.height}</td>
          <td>{user.mass}</td>
          <td>{user.hair_color}</td>
          <td>{user.skin_color}</td>
          <td>{user.eye_color}</td>
          <td>{user.gender}</td>
        </tr>
      </tbody>
    </table>
    )
}

export default User

export async function getServerSideProps({params}){
    const res = await axios.get(`http://localhost:3000/api/users/${params.id}`)
    return {
        props : {user : res.data}
    }
}