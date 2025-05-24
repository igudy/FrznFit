import sneakershoe from "../../assets/images/sneaker.png";
import clip from "../../assets/images/video/clip.mp4";
import vcover1 from "../../assets/images/video/vcover1.png";
import vcover2 from "../../assets/images/video/vcover2.png";
import vcover3 from "../../assets/images/video/vcover3.png";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import youtube from "../../assets/images/youtube.svg";
import messenger from "../../assets/images/messenger.svg";

export const heroapi = {
  title: "Play With Electric Nike",
  subtitle: "Adapt 2.0 Sneakers",
  img: sneakershoe,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};
