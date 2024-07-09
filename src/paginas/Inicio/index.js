import styles from './Inicio.module.css'

import postsData from 'json/posts.json'
import PostCard from 'componentes/PostCard'

export default function Inicio() {
    return (
        <ul className={styles.posts}>
            {postsData.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    )
}