import React from 'react';
import { useLaunchesQuery } from '../../generated/graphql';
import Launch from './Launch';
import { GraphQLError } from 'graphql';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props {
    data: {
        frameborder: string
        details: string
        is_tentative: boolean
        launch_site: {
            site_name: string
        }
        launch_success: boolean
        launch_year: number
        links: {
            flickr_images: string[]
            video_link: string[]
        }
        mission_id: string[]
        mission_name: string
        upcoming: string
        // data: any
        
    }
}

const LaunchContainer = () => {
    const { data, loading, error } = useLaunchesQuery();

    if (loading) {
        return  <div>
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                </div>
    }

    if (error || !data) {
        console.log(error)
        console.log('errorgraph', GraphQLError)
        return <div> There was an error</div>
    }
    return  <Launch data={data} />
}
export default LaunchContainer;
