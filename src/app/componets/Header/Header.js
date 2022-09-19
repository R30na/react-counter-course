import styles from "./header.module.css";

export const Header = (props) => {
  return <div className={styles.header}>{props.title}</div>;
};

export default Header;
