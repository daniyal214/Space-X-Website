import gql from 'graphql-tag';

export const QUERY_SHIPS = gql `
query ships {
    ships(sort: "image", limit: 12) {
      abs
      active
      attempted_landings
      class
      home_port
      ship_id
      image
      imo
      missions {
        flight
        name
      }
      ship_model
      ship_name
      roles
      speed_kn
      status
      successful_landings
      ship_type
      weight_kg
      year_built
    }
  }
      `