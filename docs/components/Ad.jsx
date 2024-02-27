import styles from "./Ad.module.css";

export default () => (
  <a
    href="https://marketplace.everymundo.com/"
    target="_black"
    className={styles.panel}
  >
    <div className={styles.innerPanel}>
      Discover the world's top offer marketing technology
      <span className={styles.markeplace}>EveryMundo Marketplace</span>
    </div>
  </a>
);
