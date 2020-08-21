import React, { Component } from 'react';
import { graphql, withApollo } from 'react-apollo';
import compose from 'lodash.flowright';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Section from '../components/Section';
import Loader from '../components/Loader';
import Timeline from '../components/Timeline';
import Education from '../components/Education';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    const { portfolioQuery } = this.props;

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
      education
    } = portfolioQuery.getPortfolio;

    return (
      <React.Fragment>
        <Navbar social={social} />
        <Header
          name={firstName + ' ' + lastName}
          title={title}
          address={address}
        />
        <Section summary={summary} />
        <Timeline experience={experience} />
        <Education education={education} />
        <Footer social={social} />
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  portfolioQuery: PropTypes.object
};

const portfolioQuery = gql`
  query portfolioQuery {
    getPortfolio {
      firstName
      lastName
      title
      address
      summary
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
  graphql(portfolioQuery, { name: 'portfolioQuery' })
)(Home);
