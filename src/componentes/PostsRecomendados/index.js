import styles from './PostsRecomendados.module.css'

import postsData from 'json/posts.json'
import PostCard from 'componentes/PostCard'

export default function PostsRecomendados({ currentPostId }) {
    return (
        <>
            <hr className={styles.linha} />

            <h1>Outros posts que voce pode gostar:</h1>
            
            <ul className={styles.posts}>
                {postsData
                    .filter((item) => currentPostId !== item.id) // exclude current post
                    .slice(0, 4) // show max 4 itens
                    .sort((a, b) => b.id - a.id) // sort decrescent order
                    .map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}