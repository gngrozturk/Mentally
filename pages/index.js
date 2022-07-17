import styles from "../styles/index.module.scss";
import Card from "../components/card";
import Layout from "../components/layout";
import { disorders } from "../data";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
      disorderList: disorders,
    },
  };
}

export default function Home({ disorderList }) {
  return (
    <Layout>
      <h1>Welcome to Mentally !</h1>

      <div className={styles.cards}>
        {disorderList.map((disorder) => (
          <Card
            title={disorder.name}
            src="/Paranoid.jpg"
            id={disorder.id}
            key={disorder.id}
          />
        ))}
      </div>
    </Layout>
  );
}
