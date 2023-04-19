import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import hort from "../public/images/Ambrossia.png";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import styles from "../styles/portfolio.module.css";
import { green, yellow, red, grey, purple, blue } from "@mui/material/colors";
import { portfolioCardData } from "./Data";

export default function PortfolioCard({ post, pictures, index }) {
  // const { img, link } = portfolioCardData;
  console.log(portfolioCardData);
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(34, 34, 34)",
        color: "white",
        borderRadius: "10px",
        maxHeight: "fit-content",
      }}
    >
      <Image
        src={portfolioCardData[index].img}
        alt="portfolio Image"
        className={styles.image}
      />
      <CardContent>
        <div className={styles.typo1} gutterBottom variant="h5" component="div">
          {post.name}
        </div>
        <div className={styles.typo} variant="body2" color="white">
          <div>{post.full_name}</div>
          <div>{post.created_at}</div>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a
            href={portfolioCardData[index].link}
            target={"blank"}
            rel="noreferrer"
            title="Web"
          >
            <LanguageIcon sx={{ fonstSize: "50", color: green[500] }} />
          </a>
        </Button>
        <Button size="small">
          <a
            href={post.html_url}
            target={"blank"}
            rel="noreferrer"
            title="Code"
          >
            <GitHubIcon sx={{ fonstSize: "50px", color: yellow[500] }} />
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
