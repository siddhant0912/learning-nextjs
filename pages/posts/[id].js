import Head from 'next/head'
import axios from 'axios'

export default function Post({post}){
    return (
        <div>
            <Head>
                <title>{post.title}  {post.body}</title>
            </Head>
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
        </div>
        

    )
}

export async function getStaticProps({params}){
    const res = await axios.get(`http://localhost:3000/post${params.id}.json`)
    return {
        props : {post :res.data}
    }
}

export async function getStaticPaths(){
    const res = await axios.get('http://localhost:3000/posts.json')
    let data = []
    data = res.data
    const paths = data.map(post =>{
        return {params :{id:post.id}}
    })
    return {
        paths,
        fallback: false
    }
}