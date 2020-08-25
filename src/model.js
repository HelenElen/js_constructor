import img from "./assets/image.jpg";
import { css } from "./utils";
import {
  TitleBlock,
  ImageBlock,
  TextColumnsBlock,
  TextBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("JavaScript website builder", {
    tag: "h2",
    // styles: css({
    //   color: "#111",
    //   "font-family": "sans-serif",
    //   "font-size": "64px !important",
    //   "font-weight": 700,
    //   "line-height": "64px",
    //   margin: "0 0 0",
    //   padding: "20px 30px",
    //   "text-align": "center",
    //   "text-transform": "uppercase",
    // }),
    styles: css({
      // background: "linear-gradient(to right, #AF7AC5, #D7BDE2)",
      // color: "#fff",
      // background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
      color: "black",
      padding: "1.5rem",
      "text-align": "center",
      "text-transform": "uppercase",
    }),
  }),

  new ImageBlock(img, {
    alt: "my image",
    imageStyles: "width: 500px; height: auto;",
    styles: css({
      // background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
      padding: "0 0",
      display: "flex",
      "justify-content": "center",
    }),
  }),

  new TextColumnsBlock(
    [
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and ",
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, ",
      "I will give you a complete account of the system, and expound the actual teachings of the great explorer",
    ],
    {
      styles: css({
        background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
        padding: "2rem 0",
        color: "#222",
        "font-family": "sans-serif",
        "font-size": "15px",
        "font-weight": 400,
        "line-height": "24px",
        margin: "0 0 14px",
        "text-align": "center",
      }),
    }
  ),
  new TextBlock(
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    {
      styles: css({
        // background: "linear-gradient(to right, #F4D03F, #F9E79F)",

        padding: "1rem",
        color: "black",
        "text-align": "left",
      }),
    }
  ),
];
