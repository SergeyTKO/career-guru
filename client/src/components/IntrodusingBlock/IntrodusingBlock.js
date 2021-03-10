import { Link } from "react-router-dom";
import styles from "./IntrodusingBlock.module.scss";

function IntrodusingBlock() {
  return (
    <div className={styles.introBlock}>
      <div className={styles.block}>
        <Link to="/guest-test" className={styles.clickable}>
          <div className={styles.imgWrapper}>
            <span>
              <i class="fas fa-lightbulb"></i>
            </span>
          </div>
          <p>
            Выбери свой уровень и проходи тесты, которые походят именно тебе!
          </p>
        </Link>
      </div>

      <div className={styles.block}>
        <Link to="/popular" className={styles.clickable}>
          <div className={styles.imgWrapper}>
            <span>
              <i class="fas fa-atom"></i>
            </span>
          </div>
          <p>
            Изучай самые популярные вопросы и задачи на собеседовании от
            работодателей.
          </p>
        </Link>
      </div>

      <div className={styles.block} id="anchor">
        <Link to="/cards" className={styles.clickable}>
          <div className={styles.imgWrapper}>
            <span>
              <i class="fas fa-brain"></i>
            </span>
          </div>
          <p>Прокачивай себя!</p>
        </Link>
      </div>
    </div>
  );
}

export default IntrodusingBlock;
