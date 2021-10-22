import axios from 'axios'
import React from 'react'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Users = ({users}) => {
    const router = useRouter()
    const onPress = (id) => {
        router.push(`/users/${id}`)
        return
    }

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <ul>
                        <li className={styles.card} onClick={() => onPress(user.id)} key={user.id}>{user.name}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Users

export async function getServerSideProps(){
    const res = await axios.get('http://localhost:3000/api/users')
    return {
        props : {users : res.data},
    }
}
