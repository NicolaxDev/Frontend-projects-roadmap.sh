import React from "react";
import "../styles/card.css";
import singlePageCv from "../../public/assets/single-page-cv.png"
import { FaExternalLinkAlt } from "react-icons/fa";

export default function CardProject({ name, link }) {
  return (
    <div className="card">
      <img src={singlePageCv} alt="" />
      <div>
        <span>{name}</span>
        <a href={`${link}`}>{name} <FaExternalLinkAlt /> </a>
      </div>
    </div>
  );
}
