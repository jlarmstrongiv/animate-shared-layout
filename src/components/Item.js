import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Item({ id, item }) {
  const { category, title } = item;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link href="/">
          <a />
        </Link>
      </motion.div>
      <div className="card-content-container open">
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
          <motion.div className="content-container" animate>
            <p>
              Every day is taco ipsum tuesday. Tacos Al pastor/De Adobada are
              made of thin pork steaks seasoned with adobo seasoning, then
              skewered and overlapped on one another on a vertical rotisserie
              cooked and flame-broiled as it spins. Josh’s taco shack is the
              best taco shack. Give me all your tacos. Black or pinto beans? Um,
              Tabasco? No thanks, do you have any Cholula? Let’s do a beef and a
              chicken, and one with both. 50 cent tacos! I’ll take 30. If you
              were a taco, would you eat yourself?
            </p>
            <p>
              Give me all the tacos, immediately. You see, the refried beans are
              really just the adhesive necessary to apply the soft tortilla to
              the hard taco shell. Say taco one more time. Tacos dorados called
              flautas, or taquitos, for which the tortillas are filled with
              pre-cooked shredded chicken, beef or barbacoa, rolled into an
              elongated cylinder and deep-fried until crisp. Give me all your
              tacos. TACOS!! Black or pinto beans? How bout a gosh darn
              quesadilla? How bout a gosh darn quesadilla? You see, the refried
              beans are really just the adhesive necessary to apply the soft
              tortilla to the hard taco shell.
            </p>
            <p>
              50 cent tacos! I’ll take 30. TACOS!! Give me all the tacos,
              immediately. How do you feel about hard shelled tacos? Tacos,
              again? This will be 5 times this week and it’s only Tuesday. Let’s
              do a beef and a chicken, and one with both. These tacos are lit
              🔥. Burritos are very tasty. Tacos dorados called flautas, or
              taquitos, for which the tortillas are filled with pre-cooked
              shredded chicken, beef or barbacoa, rolled into an elongated
              cylinder and deep-fried until crisp. CARNE ASADA!! Let’s do a beef
              and a chicken, and one with both. Can you put some peppers and
              onions on that?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
