import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="httpS://github.com/verdeli.png" />
                    <div className={styles.authorInfo}>
                        <strong>Verdelin</strong>
                        <p>Web Developer</p>
                </div>
                </div>
                <time dateTime='2022-28-12 14:59:33'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraaaaa 👋</p>
                <p>ACabei de subir para o meu profile. È um projeto que eu fiz no WLW Return, evento super massa.</p>
                <p><a href='#'>👉 {'  '} jane.design/doctorcare</a></p>
                <p><a href='#'>#novoprojeto {' '} #nlx {' '} #rocketseat</a></p>
            </div>
        </article>
    );
}