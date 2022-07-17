import { disorders } from "../../data";
import Checklist from "../../components/checkList";
import Layout from "../../components/layout";
import Title from "../../components/title";

export const getStaticProps = async ({ params }) => {
  const disorderList = disorders.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      disorder: disorderList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = disorders.map((disorder) => ({
    params: { id: disorder.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default ({ disorder }) => {
  return (
    <Layout>
      <div>
        <Title text={disorder.name} />
        <Checklist questions={disorder.questions} />
      </div>
    </Layout>
  );
};
