import "../styles/globals.css";
import Layout from "../Components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps}) {
  const Router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
