import {useRouter} from 'next/router'
import Head from 'next/head'

export default function Post({post}){
    const router= useRouter()
    const { id } = router.query

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
    const req = await fetch(`http://localhost:3000/post${params.id}.json`)
    const data = await req.json()
    console.log('data',data)
    return {
        props : {post :data}
    }
}

export async function getStaticPaths(){
    const req = await fetch('http://localhost:3000/posts.json')
    const data = await req.json()

    const paths = data.map(post =>{
        return {params :{id:post.id}}
    })
    return {
        paths,
        fallback: false
    }
}