import styles from "./Group.module.css";

const ContainerGroup = ({ children }) => (
  <div className={styles.ContainerGroup}>{children}</div>
);

const Group = ({ children }) => <div className={styles.Group}>{children}</div>;

Group.Left = ({ children }) => (
  <div className={styles.GroupLeft}>{children}</div>
);
Group.Right = ({ children }) => (
  <div className={styles.GroupRight}>{children}</div>
);

export default ContainerGroup;
export { Group };
