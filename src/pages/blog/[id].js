import React from "react";
import { items } from "../../data";
import { Item } from "../../components/Item";
import { AnimatePresence } from "framer-motion";

export default function Post({ item }) {
  const id = item.id;
  return (
    <AnimatePresence>
      {id && <Item id={id} item={item} key={item.id} />}
    </AnimatePresence>
  );
}

// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths() {
  return {
    paths: items.map((item) => ({
      params: { id: item.id },
    })),
    // https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
    fallback: false,
  };
}

// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export async function getStaticProps({ params }) {
  const item = items.find((item) => item.id === params.id);
  if (!item) throw new Error("Item not found");

  return {
    props: { item }, // will be passed to the page component as props
  };
}
