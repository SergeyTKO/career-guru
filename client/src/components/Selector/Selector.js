import styles from './Selector.module.scss'

function Selector({optionsValue}){

      return(
        <select className={styles.selector}>
            {optionsValue&&optionsValue.map(opt=><option key={opt.id}>{opt.value}</option>)}
        </select>
    )
}

export default Selector