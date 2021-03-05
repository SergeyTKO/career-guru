import styles from './Menu.module.scss'

function Menu(){
    return(
        <div className={styles.menu}>
            <ui>
                <li>Избранное</li>
                <li>Пройденные тесты</li>
                <li>К изучению</li>
                <hr/>
                <li>Выйти</li>
            </ui>
        </div>
    )
}

export default Menu