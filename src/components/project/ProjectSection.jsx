// import useEffect, useState, useReducer,"react";
import { SectionWrapper } from "../atom/SectionWrapper";
import { Project } from "./Project";
import { getListOfUrlRepositoriesUrl } from "../../lib/api-url";
import { GITHUB_USERNAME } from "../../lib/config";
import { Loader } from "../atom/Loader/Loader";
import { useFetch } from "../../hooks/useFetch";

import { FaAtlassian } from "react-icons/fa";

import { useState } from "react";

//-----------
import { BsEyeglasses } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiSkirt } from "react-icons/gi";
import { MdPermDeviceInformation } from "react-icons/md";
import { BsFileEarmarkPerson } from "react-icons/bs";
//--------------

export const ProjectSection = () => {
  //--------------
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  //-----------
  //ajouter un tableau d'icone--
  const iconArray = [
    <RiMovie2Line key={1} />,
    <IoGameControllerOutline key={2} />,
    <GiSkirt key={3} />,
    <MdPermDeviceInformation key={4} />,
    <BsFileEarmarkPerson key={5} />,
  ];
  const imgArray = [
    "/images/tmdb.jpg",
    "/images/gamepad.png",
    "/images/vinted.png",
    "/images/news.png",
    "/images/portfolio.png",
  ];

  const {
    status,
    data: projects,
    error,
  } = useFetch(getListOfUrlRepositoriesUrl(GITHUB_USERNAME));

  if (status === "pending" || status === "idle") {
    return <Loader />;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <SectionWrapper
      title={
        <div style={{ display: "flex", alignItems: "center" }} id="Projects">
          <FaAtlassian
            style={{
              fontSize: "28px",
              color: "#677AF1",
              marginRight: "15px",
            }}
          />{" "}
          Projets
        </div>
      }
    >
      <div className="flex flex-wrap justify-center gap-8">
        {/* <Project
          key="1"
          icon={<BsEyeglasses />}
          image="/images/essilor4.png"
          name="Essilor-Webapp-Interface"
          homepageUrl="https://www.meyecustom.com"
          description="Webapp de type interface de personnalisation de lunettes de vue et solaires pour Essilor"
          handleClick={handleClick}
          showAlertOnClick={true} // Activer l'ale
          url=""
        /> */}
        {/* on va mapper sur les repositories de Github */}
        {projects?.map((repository, index) => {
          const icon = iconArray[index];
          const image = imgArray[index];
          return (
            <Project
              key={repository.name}
              {...repository}
              icon={icon}
              image={image}
              handleClick={handleClick}
              showAlertOnClick={false} // Désactiver l'alerte pour les autres projet
            />
          );
        })}
        {/* GitHub Repository - Exercise (replace this) */}
        {/* <Project {...projects[0]} /> */}
      </div>
      {showAlert && (
        <div className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center">
          <div className="absolute top-0 left-0 right-0 bg-red-500 p-2 text-center text-white opacity-100 transition-opacity duration-500">
            Le code source ne peut pas être visualisé.
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};
