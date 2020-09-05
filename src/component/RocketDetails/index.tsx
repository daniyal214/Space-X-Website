import React from 'react';
import { useRocketsQuery } from '../../generated/graphql';
import { useParams } from 'react-router-dom'
import RocketDetails from './RocketDetails';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props {
    data: {

        active: boolean
        boosters: number
        company: string
        cost_per_launch: number
        country: string
        description: string
        engines: {
            number: number
            type: string
            version: string
            __typename: string
        }
        first_flight: string
        diameter: {
            meters: string
        }
        flickr_images: string[]
        mass: {
            kg: number
            __typename: string
        }
        rocket_id: string
        rocket_name: string
        rocket_type: string
        stages: number
        success_rate_pct: number
        __typename: string

    }
}

const RocketContainer = () => {

    const { id } = useParams();
    const { data, loading, error } = useRocketsQuery();


    if (loading) {
        return  <div>
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                </div>
    }

    if (error || !data) {
        return <div> There was an error</div>
    }

    const currentItem: any = data?.rockets?.find(rocket => rocket?.rocket_id === id)
    console.log(currentItem);
    return (<RocketDetails data={currentItem} />);

}

export default RocketContainer;
