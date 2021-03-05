import styles from './Article.module.scss'

function Article(){
    return(
        <div className={styles.article}>
        <header className={styles.header}>
            <h1>Заголовок статьи</h1>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </header>
        <div className={styles.text}></div>
        </div>
    )
}

export default Article