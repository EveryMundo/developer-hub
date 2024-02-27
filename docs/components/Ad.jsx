import styles from "./Ad.module.css";

export default () => (
  <a
    href="https://marketplace.pros.com/"
    target="_black"
    className={styles.panel}
  >
    <div className={styles.innerPanel}>
      Discover the world's top offer marketing technology
      <span className={styles.marketplace}>PROS Marketplace</span>
    </div>
  </a>
);
