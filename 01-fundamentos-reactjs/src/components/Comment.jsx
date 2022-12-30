import styles from './Comment.module.css'
import {Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state)=>{
            return state + 1;
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar harBorder={false} src='https://github.com/verdeli.png' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Verdelin</strong>
                            <time dateTime='2022-28-12 14:59:33'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{ content }</p>
                </div>
                <footer>
                   <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                   </button>
                </footer>
            </div>
        </div>
    );
}