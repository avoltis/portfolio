import React from "react";
import { useQuery, gql } from "@apollo/client";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Section from "../components/Section";
import Loader from "../components/Loader";
import Timeline from "../components/Timeline";
import Education from "../components/Education";
import Footer from "../components/Footer";

const Home = () => {
  const { loading, error, data } = useQuery(portfolioQuery);

  if (!error & loading && !(data && !!data?.getPortfolio)) {
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
  } = data.getPortfolio;

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
