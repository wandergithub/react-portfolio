/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Button from "@material-ui/core/Button";
import "./Works.css";

// Import ../../assets/recentprojects/
import travelers from "../../assets/recentprojects/travelersHub.png";
import stockImgApp from "../../assets/recentprojects/stockM.png";
import bookstoreImg from "../../assets/recentprojects/bookstore.png";
import singers from "../../assets/recentprojects/singers.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Stock Metrics",
      description: `Mobile web app which allows the user to look for real-time information on
                  the stock market like ask-Price, close-price, and much more.`,
      alter: "Stock Metrics",
      image: `${stockImgApp}`,
      url: {
        github: "https://github.com/wandergithub/Stock-Metrics",
        live: "https://stock-market-webb-app.herokuapp.com/",
      },
    },
    {
      id: 2,
      title: "Travelers Hub",
      description: `Allows the user to manage the booking of SpaceX rockets and joining missions.
                   The user can manage all his subscriptions in My Profile section where all the Rockets
                   and Missions selected previously are displayed.`,
      alter: "Travelers Hub",
      image: `${travelers}`,
      url: {
        github: "https://github.com/wandergithub/travelers-hub",
        live: "https://wandergithub.github.io/travelers-hub/",
      },
    },
    {
      id: 3,
      title: "Bookstore",
      description: `The user can manage a list of books. Build using React and Redux consuming
                   the bookstore API service provided by the Microverse team. This project is meant
                    to practice Redux knowledge like; Store, actions, reducers, and the principle of
                     immutability.`,
      alter: "Bookstore",
      image: `${bookstoreImg}`,
      url: {
        github: "https://github.com/wandergithub/Bookstore",
        live: "https://dev--relaxed-liger-ac7a98.netlify.app",
      },
    },
    {
      id: 4,
      title: "Singers Details",
      description: `iTunes API based web app which allows the user search for any artist album's,
                   like and comment them.`,
      alter: "Singers Details",
      image: `${singers}`,
      url: {
        github: "https://github.com/wandergithub/Singers-details",
        live: "https://wandergithub.github.io/Singers-details/",
      },
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + ". " + project.title} />
              </h3>
              <p className="description">{project.description}</p>
              <div className="btn-container">
                <Button
                  variant="outlined"
                  onClick={() => {
                    window.open(project.url.github, "_blank");
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    window.open(project.url.live, "_blank");
                  }}
                >
                  Live
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
