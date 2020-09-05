import gql from 'graphql-tag';

export const QUERY_ROCKETS = gql `
query rockets {
    rockets {
      rocket_id
      boosters
      active
      company
      cost_per_launch
      country
      description
      diameter {
        meters
      }
      engines {
        number
          type
        version
      }
      first_flight
      mass {
        kg
      }
      rocket_name
      success_rate_pct
      flickr_images
    }
  }
`