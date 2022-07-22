import styles from "../styles/paragraph.module.scss";

function Paragraph({ text }) {
  return <p className={styles.paragraph}>{text}</p>;
}

export default Paragraph;
