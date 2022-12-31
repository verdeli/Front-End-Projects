import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post({ author, content, publishAt }) {
    const [ comments, setComments ] = useState([
      'Post muito bacana ein!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const pushedDateFormatted = format(publishAt, "d 'de' LLLL 'ás' HH:mm'h", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {

        event.target.setCustomValidity('');

       setNewCommentText(event.target.value); 
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Precisa escrever algo aqui, para poder Publicar, caro Camarada');
    }
    const isNewCommentEmpty = newCommentText.length === 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <p>{author.role}</p>
                </div>
                </div>
                <time title = { pushedDateFormatted } dateTime = { publishAt.toISOString() }> 
                    { publishedDateRelativeToNow }
                </time>
            </header>

            <div className={styles.content}>
               {content.map(line =>{
                if(line.type === 'paragraph') {
                    return <p key={line.content}>{ line.content }</p>
                } else if(line.type === 'link'){
                    return <p key={line.content}><a href="#">{ line.content }</a></p>
                }
               })}
            </div>
            <form onSubmit={ handleCreateNewComment } className={styles.commentForm}>
                <strong>Deixe, por gentileza, seu feedback</strong>

                <textarea
                name="comment"
                placeholder='Deixe seu comentário ...'
                value={ newCommentText }
                onChange={ handleNewCommentChange }
                onInvalid={handleNewCommentInvalid}
                required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                        </button>
                </footer>
            </form>
            <div className={styles.commentList}>
              {comments.map(comment => {
                return(
                <Comment 
                    key={comment} 
                    content={comment}
                    onDeleteComment={deleteComment}
                />
                )
              })}
            </div>
        </article>
    );
}