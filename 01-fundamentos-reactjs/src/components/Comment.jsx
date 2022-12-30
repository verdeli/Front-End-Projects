import styles from './Comment.module.css'
import {Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment() {
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
                        <button title='Deletar Comentário'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom Vewrdelin!</p>
                </div>
                <footer>
                   <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>
        </div>
    );
}