import "../../styles/globals.css";
import HttpsRedirect from "react-https-redirect";
import { AnimateSharedLayout } from "framer-motion";
import { Header } from "../components/Header";

// https://reacttricks.com/animating-next-page-transitions-with-framer-motion/
// https://www.freecodecamp.org/news/how-to-add-interactive-animations-and-page-transitions-to-a-next-js-web-app-with-framer-motion/

function MyApp({ Component, pageProps, router }) {
  return (
    <HttpsRedirect>
      <AnimateSharedLayout type="crossfade" exitBeforeEnter>
        <Header />
        <Component {...pageProps} key={router.route} />
      </AnimateSharedLayout>
    </HttpsRedirect>
  );
}

export default MyApp;
