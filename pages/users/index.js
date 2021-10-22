import axios from 'axios'
import React from 'react'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
const Users = ({users}) => {
    return (
        <div>
            {users.map(user => (
                <div>
                    <ul>
                        <Link href={`/users/${user.id}`}>
                        <a>
                            <li className={styles.card} key={user.id}>{user.name}</li>
                        </a>
                        </Link>
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