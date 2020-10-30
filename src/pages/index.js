import Head from "next/head";
import { List } from "../components/List";
import { items } from "../data";

export default function Home({ items }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List items={items} />
    </>
  );
}

// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export async function getStaticProps() {
  return {
    props: { items }, // will be passed to the page component as props
  };
}
