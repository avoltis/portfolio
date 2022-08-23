import React from "react";
import { useQuery, gql } from "@apollo/client";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Section from "../components/Section";
import Loader from "../components/Loader";
import Timeline from "../components/Timeline";
import Education from "../components/Education";
import Footer from "../components/Footer";

import portfolio from "../portfolio.json";

const Home = ({ stylesLoaded }) => {
  //   const { loading, error, data } = useQuery(portfolioQuery);

  let portfolioData = portfolio; //getting the json locally to have faster 1st load time on website (free website :p)

  if (!stylesLoaded) {
    return <Loader />;
  }

  //   if (!error & loading && !(data && !!data?.getPortfolio)) {
  //     return <Loader />;
  //   }

  //   if (!portfolioQuery?.loading) {
  //     portfolioData = portfolioQuery.getPortfolio;
  //   }

  const {
    firstName,
    lastName,
    title,
    address,
    summary,
    social,
    experience,
    education,
    resume,
  } = portfolioData;

  return (
    <React.Fragment>
      <Navbar resume={resume} social={social} />
      <Header
        name={firstName + " " + lastName}
        title={title}
        address={address}
        resume={resume}
      />
      <Section summary={summary} />
      <Timeline experience={experience} />
      <Education education={education} />
      <Footer social={social} />
    </React.Fragment>
  );
};

Home.propTypes = {
  stylesLoaded: PropTypes.bool,
};

Home.defaultProps = {
  stylesLoaded: false,
};

const portfolioQuery = gql`
  query portfolioQuery {
    getPortfolio {
      firstName
      lastName
      title
      address
      summary
      resume
      social {
        github
        linkedIn
        email
      }
      experience {
        company
        title
        startDate
        endDate
        timeLine
        present
        description
        address
        skills
        image
      }
      education {
        university
        degree
        startYear
        endYear
        timeLine
        present
        fieldOfStudy
        address
      }
      certifications {
        name
        issuingOrganization
        issueDate
        expirationDate
        credentialID
        credentialUrl
      }
      skills
      topSkills
      languages
    }
  }
`;

export const HomeScreen = Home;
