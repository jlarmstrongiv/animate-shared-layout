import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Card({ id, title, category, theme }) {
  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`/images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link href={`/blog/${id}`}>
        <a className={`card-open-link`} />
      </Link>
    </li>
  );
}

export function List({ items }) {
  return (
    <ul className="card-list">
      {items.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </ul>
  );
}
