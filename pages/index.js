import styles from "../styles/index.module.scss";
import Card from "../components/card";
import Layout from "../components/layout";
import { disorders } from "../data";
import Title from "../components/title";

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
      <Title text="Welcome to Mentally" />

      <div className={styles.cards}>
        {disorderList.map((disorder) => (
          <Card
            title={disorder.name}
            src="/Paranoid.jpg"
            name={disorder.name}
            key={disorder.id}
          />
        ))}
      </div>
    </Layout>
  );
}
