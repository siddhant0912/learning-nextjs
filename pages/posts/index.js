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
                            <li  className={styles.card}>{post.title}</li>
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
    const req = await fetch(`http://localhost:3000/posts.json`)
    const data = await req.json()
    console.log('datat',data)
    return {
        props : {posts :data}
    }
}