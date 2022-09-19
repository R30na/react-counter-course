import styles from "./footer.module.css";

const Footer = (props) => {
  return <div className={styles.footer}>{props.title}</div>;
};

export default Footer;
