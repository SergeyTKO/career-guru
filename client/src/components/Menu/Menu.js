import styles from './Menu.module.scss'

function Menu(){
    return(
        <div className={styles.menu}>
                <h3>Меню</h3>
                <hr/>
            <ul>
                <li>Избранное</li>
                <li>Пройденные тесты</li>
                <li>К изучению</li>
                <li>Выйти</li>
            </ul>
        </div>
    )
}

export default Menu