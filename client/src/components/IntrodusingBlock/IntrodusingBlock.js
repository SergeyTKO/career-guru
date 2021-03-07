import Image from "../Image/Image";
import styles from "./IntrodusingBlock.module.scss";

function IntrodusingBlock() {
  return (
    <div className="introBlock">
      <div className={styles.imgWrapper}>
        <Image />
        <p></p>
      </div>
      <div className={styles.imgWrapper}>
        <Image />
        <p></p>
      </div>
    </div>
  );
}

export default IntrodusingBlock;
