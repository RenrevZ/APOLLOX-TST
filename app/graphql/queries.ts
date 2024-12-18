import { gql } from '@apollo/client/core';

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launches {
      id
      mission_name
      launch_date_utc
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
      details
    }
  }
`;

export const GET_ROCKETS = gql`
  query GetRockets{
    rockets {
      id
      name
      description
    }
  }
`;


export const GET_ROCKET_DETAILS = gql`
  query GetRocket($id: ID!) {
    rocket(id: $id) {
      name
      description
      first_flight
      height {
        meters
      }
      diameter {
        meters
      }
      mass {
        kg
      }
      stages
    }
  }
`;

