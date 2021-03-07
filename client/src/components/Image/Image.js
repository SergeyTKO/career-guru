import styles from './Image.module.scss'

function Image({imgSrc, imgAlt}){
    return(
        <img src={imgSrc} alt={imgAlt} />
    )
}

export default Image