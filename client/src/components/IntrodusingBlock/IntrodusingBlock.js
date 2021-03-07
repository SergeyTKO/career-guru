import Image from "../Image/Image";
import styles from "./IntrodusingBlock.module.scss";
import img from '../../image/brain.jpg'

function IntrodusingBlock() {
  return (
    <div className="introBlock">
      <div className={styles.imgWrapper}>
        <Image imgSrc={'./test.jpeg'} imgAlt={'тестирование'}/>
        <p>Выбери свой уровен и проходи тесты, которые походят именно тебе!</p>
      </div>
      <div className={styles.imgWrapper}>
        <Image imgSrc={'./job.png'} imgAlt={'задачи от работодателей'}/>
        <p>Изучай самые популярные вопросы и задачи на собеседовании от работодателей.</p>
      </div>
      <div className={styles.imgWrapper}>
        <Image imgSrc={img} imgAlt={'прокачка навыков'}/>
        <p>Прокачивай себя!</p>
      </div>
    </div>
  );
}

export default IntrodusingBlock;
