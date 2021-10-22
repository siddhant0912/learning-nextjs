import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
export default function PostList({posts}){
    return (
        <>
            <Head>
                <title>{"All Blogs"}</title>
            </Head>
            <div>
                {posts.map(post => (
                    <a>
                        <ul>
                            <Link href={`/posts/${post.id}`}>
                            <a>
                            <li key={post.id}  className={styles.card}>{post.title}</li>
                            </a>
                           </Link>
                        </ul>
                    </a> 
                ))}
            </div>
        </>
    )
}

export async function getStaticProps({params}){
    const res= await axios.get(`http://localhost:3000/posts.json`)
    const data = res.data
    return {
        props : {posts :data}
    }
}