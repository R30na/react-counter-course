import Counter from "../Counter/Counter";
import styles from "./body.module.css";

const Body = (props) => {
  return (
    <div className={styles.body}>
      <Counter />
    </div>
  );
};

export default Body;
