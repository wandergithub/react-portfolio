/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Button from "@material-ui/core/Button";
// Filter material components
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// Css imports
import "./Works.css";

// Import ../../assets/recentprojects/
import travelers from "../../assets/recentprojects/travelersHub.png";
import stockImgApp from "../../assets/recentprojects/stockM.png";
import bookstoreImg from "../../assets/recentprojects/bookstore.png";
import singers from "../../assets/recentprojects/singers.png";

// Constants
const REACT = 'React.js';
const BOOTSTRAP = 'Bootstrap';
const API = 'API-connect';
const REDUX = 'Redux';
const JEST = 'Jest';
const MUI = 'Material-UI';
const POSTGRE = 'PostGreSQL';
const JS = 'JavaScript';
const WEBPACK = 'WebPack';
const HTML_CSS = 'HTML&CSS';

// Filter tags icons
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

const isTagged = (projectTechs, arrayTags) => {
  if (arrayTags.length === 0) {
    return true;
  }

  for(let i = 0; i < projectTechs.length; i++) {
    if(arrayTags.includes(projectTechs[i])) return true;
  }

  return false;
};

export const Works = () => {
  const classes = useStyles();
  const [filters, setFilters] = useState([]);
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
      tech: [REACT, REDUX, JEST, API],
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
      tech: [REACT, BOOTSTRAP, API, REDUX, JEST],
    },
    {
      id: 3,
      title: "E-commerce",
      description: `Completely responsive E-commerce web page which allows the user to navigate through different categories of items, filter them by category and add them to the shopping cart. Users can manage their current bag on the shopping cart containing a list of items where each one can be deleted. In the shopping cart, the user can delete or finish buying.`,
      alter: "E-commerce",
      image: `https://github.com/wandergithub/e-commerce/blob/dev/app_screenshot(2).png?raw=true`,
      url: {
        github: "https://github.com/wandergithub/e-commerce",
        live: "https://wandergithub.github.io/e-commerce/",
      },
      tech: [REACT, MUI, API, REDUX],
    },
    {
      id: 4,
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
      tech: [REACT, REDUX, BOOTSTRAP],
    },
    {
      id: 5,
      title: "Singers Details",
      description: `iTunes API based web app which allows the user search for any artist album's,
                   like and comment them.`,
      alter: "Singers Details",
      image: `${singers}`,
      url: {
        github: "https://github.com/wandergithub/Singers-details",
        live: "https://wandergithub.github.io/Singers-details/",
      },
      tech: [JS, HTML_CSS, API, JEST, WEBPACK],
    },
    {
      id: 6,
      title: "Leaderboard",
      description: `This project is a website that displays scores submitted by different players. It also allows you to submit your score.`,
      alter: "Leaderboard",
      image: 'https://github.com/wandergithub/Leaderboard/blob/development/screenshot.png?raw=true',
      url: {
        github: "https://github.com/wandergithub/Leaderboard",
        live: "https://wandergithub.github.io/Leaderboard/",
      },
      tech: [JS, HTML_CSS, BOOTSTRAP, WEBPACK, API],
    },
    {
      id: 7,
      title: "Vet Clinic",
      description: `In this project, I used a relational database to create the initial data structure for a vet clinic. I created a table to store animals' information, insert some data into it, and query it.`,
      alter: "Vet Clinic",
      image: `https://github.com/wandergithub/vet-clinic/raw/dev/schema-diagram.png`,
      url: {
        github: "https://github.com/wandergithub/vet-clinic",
        live: "https://github.com/wandergithub/vet-clinic",
      },
      tech: [POSTGRE],
    },
    {
      id: 8,
      title: "Awesome Books",
      description: `This web page keeps a list of books using the local storage to keep track of Book titles with their corresponding Authors.`,
      alter: "Awesome Books",
      image: `https://raw.githubusercontent.com/wandergithub/awesome-books/master/app_screenshot.png`,
      url: {
        github: "https://github.com/wandergithub/awesome-books",
        live: "https://wandergithub.github.io/awesome-books/",
      },
      tech: [HTML_CSS, JS],
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="filter">
          <div>
            <h3 className="title">
              <TextDecrypt text="Filter projects by tech tag" />
            </h3>
            <Autocomplete
              multiple
              id="checkboxes-tags"
              options={techStack}
              disableCloseOnSelect
              getOptionLabel={(option) => option.tech}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.tech}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Checkboxes" placeholder="Project Tags" />
              )}
              onChange={(event, value) => setFilters(value)}
            />
          </div>
        </div >
        <div className="projects-content">
        {projects.map((project) => {
          const arr = filters.map((filter) => filter.tech);
          if(isTagged(project.tech, arr))
          return (
            <div className="project" key={project.id}>
              <div className="__content_wrapper no_with">
                <h3 className="title">
                  <TextDecrypt text={project.id + ". " + project.title} />
                </h3>
                <div className="__img_wrapper">
                  <img src={project.image} alt={project.alter} />
                </div>
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
          )
        })}
        </div>
      </Container>
    </section>
  );
};

const techStack = [
  { tech: REACT },
  { tech: BOOTSTRAP },
  { tech: API },
  { tech: REDUX },
  { tech: JEST },
  { tech: MUI },
  { tech: POSTGRE },
  { tech: JS },
  { tech: WEBPACK },
  { tech: HTML_CSS },
];
