import Head from "next/head";
import { headData } from "../Components/data";
const Meta = ({id}) => {
  return (
    <Head>
      <title>{headData[id].title}</title>
      <meta name={headData[id].name} content={headData[id].content} />
      <link rel="icon" href={headData[id].image} />
    </Head>
  );
};

export default Meta;
