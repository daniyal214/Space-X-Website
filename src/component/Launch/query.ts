import gql from 'graphql-tag';

export const QUERY_LAUNCH = gql `
query launches {
  launches(limit: 12, sort: "flickr_images", offset: 10 ){
    details
    is_tentative
    launch_site {
      site_name
    }
    launch_success
    launch_year
    links {
      flickr_images
      video_link
    }
    mission_id
    mission_name
    upcoming
  }
}

`