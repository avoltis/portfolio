import React, { Component } from 'react';
import { graphql, withApollo } from 'react-apollo';
import compose from 'lodash.flowright';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';

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

    console.log(portfolioQuery.getPortfolio);

    return (
      <React.Fragment>
        <Header />
        <Section />
        <Timeline />
        <Education />
        <Footer />
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