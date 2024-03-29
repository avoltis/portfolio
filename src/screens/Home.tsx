import { useQuery, gql } from "@apollo/client";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Section from "../components/Section";
import Loader from "../components/Loader";
import Timeline from "../components/Timeline";
import Education from "../components/Education";
import Hobbies from "../components/Hobbies";
import Footer from "../components/Footer";

import portfolio from "../portfolio.json";

const Home = ({ stylesLoaded }: screenProps) => {
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





//   voltis

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
    hobbies,
  } = portfolioData;

  return (
    <>
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
      <Hobbies hobbies={hobbies} />
      <Footer social={social} />
    </>
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
      hobbies
    }
  }
`;

type screenProps = {
  stylesLoaded: boolean;
};

export const HomeScreen = Home;
