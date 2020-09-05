import React from 'react';
import { useLaunchesQuery } from '../../generated/graphql';
import { useParams } from 'react-router-dom'
import LaunchDetails from './LaunchDetails';
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
        data: any
    }
}

const LaunchContainer = () => {

    const { id } = useParams();
    const { data, loading, error } = useLaunchesQuery();


    if (loading) {
        return  <div>
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                </div>
    }

    if (error || !data) {
        return <div> There was an error</div>
    }

    const currentItem: any = data?.launches?.find(launch => launch?.mission_name === id)
    console.log(currentItem);
    return (<LaunchDetails data={currentItem} />);

}

export default LaunchContainer;
