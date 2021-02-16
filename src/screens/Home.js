import React from "react";
import { graphql, withApollo } from "react-apollo";
import compose from "lodash.flowright";
import { gql } from "apollo-boost";
import PropTypes from "prop-types";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Section from "../components/Section";
import Loader from "../components/Loader";
import Timeline from "../components/Timeline";
import Education from "../components/Education";
import Footer from "../components/Footer";

const Home = ({ portfolioQuery }) => {
  if (portfolioQuery.loading) {
    return <Loader />;
  }

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
  } = portfolioQuery.getPortfolio;

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
  portfolioQuery: PropTypes.object,
};

Home.defaultProps = {
  portfolioQuery: {},
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

export const HomeScreen = compose(
  withApollo,
  graphql(portfolioQuery, { name: "portfolioQuery" })
)(Home);
