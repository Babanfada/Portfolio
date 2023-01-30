import React from "react";
import Meta from "../public/Meta";
import PageHeader from "../Components/PageHeader";
import PortfolioCard from "../Components/PortfolioCard";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "../styles/portfolio.module.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const portfolio = ({ posts, pictures }) => {
  console.log(posts, pictures);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, scale: 2 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Meta id={2} />
      <PageHeader id={1} />
      <Swiper
        className={styles.wrapper}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          950: {
            width: 950,
            slidesPerView: 3,
          },
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        // className="mySwiper"
      >
        {posts.map((post, index) => {
          return (
            <SwiperSlide className={styles.swiperslide} key={index}>
              <PortfolioCard post={post} pictures={pictures} index={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
  // }
};

export default portfolio;

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const res = await fetch("https://api.github.com/users/Babanfada /repos");
  const resp = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  const posts = await res.json();
  const pictures = await resp.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
      pictures,
    },
  };
}
