import React, { Component } from 'react';
import { graphql, withApollo } from 'react-apollo';
import compose from 'lodash.flowright';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
  render() {
    const { portfolioQuery } = this.props;

    if (portfolioQuery.loading) {
      return (
        <div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            loading
          </a>
        </div>
      );
    }

    console.log(portfolioQuery.getPortfolio);

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
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
