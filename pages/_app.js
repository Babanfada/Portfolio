import "../styles/globals.css";
import Layout from "../Components/Layout";

const menu = [
  {
    icon: "",
    name: "",
  },
];
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
