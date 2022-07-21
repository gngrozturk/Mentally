import Head from "next/head";
import { disorders } from "../../data";
import Checklist from "../../components/checkList";
import Layout from "../../components/layout";
import Title from "../../components/title";

const slug = (title) => {
  let slug = title.toLowerCase();
  slug = slug.replaceAll(/ı/gi, "i");
  slug = slug.replaceAll(/ö/gi, "o");
  slug = slug.replaceAll(/ü/gi, "u");
  slug = slug.replaceAll(/ğ/gi, "g");
  slug = slug.replaceAll(/ç/gi, "c");
  slug = slug.replaceAll(/ş/gi, "s");
  // Trim the last whitespace
  slug = slug.replaceAll(/\s*$/g, "");
  // Change whitespace to "-"
  slug = slug.replaceAll(/\s+/g, "-");
  return slug;
};

export const getStaticProps = async ({ params }) => {
  const disorderList = disorders.filter(
    (p) => slug(p.name).toString() === params.name
  );
  return {
    props: {
      disorder: disorderList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = disorders.map((disorder) => ({
    params: { name: slug(disorder.name).toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default ({ disorder }) => {
  return (
    <Layout>
      <Head>
        <title>{disorder.name}</title>
        <meta name="description" content={disorder.name}></meta>
      </Head>
      <div>
        <Title text={disorder.name} />
        <Checklist questions={disorder.questions} />
        <p>{disorder.definition}</p>
      </div>
    </Layout>
  );
};
