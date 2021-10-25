import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options }) => {
  return (
    <div>
      <button
        className={styles.btn}
        name="good"
        type="button"
        onClick={options}
      >
        Good
      </button>
      <button
        className={styles.btn}
        name="neutral"
        type="button"
        onClick={options}
      >
        Neutral
      </button>
      <button className={styles.btn} name="bad" type="button" onClick={options}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
