import {useEffect} from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import Menu from '../Menu/Menu'
import Button from '../Button/Button'
import styles from './Modal.module.scss'

function Modal(){

    const history = useHistory();

  const closeModal = e => {
    e.stopPropagation();
    history.goBack();
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);


    return (
        <div className={styles.modal} >
        <Menu />
        <Button buttonHandler={closeModal} btnValue={<i class="fas fa-times"></i>}/>
        </div>
    )
}

export default withRouter(Modal)   