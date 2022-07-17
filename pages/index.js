import styles from "../styles/index.module.scss";
import Card from "../components/card";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to Mentally !</h1>
      <div className={styles.cards}>
        <Card title="Paranoid" src="/Paranoid.jpg" />
        <Card title="Test" src="/Paranoid.jpg" />
        <Card title="Paranoid" src="/Paranoid.jpg" />
        <Card title="Paranoid" src="/Paranoid.jpg" />
        <Card title="Paranoid" src="/Paranoid.jpg" />
        <Card title="Paranoid" src="/Paranoid.jpg" />
      </div>
    </Layout>
  );
}
