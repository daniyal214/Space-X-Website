import React from 'react';
import { useRocketsQuery } from '../../generated/graphql';
import { useParams } from 'react-router-dom'
import RocketDetails from './RocketDetails';
import CircularProgress from '@material-ui/core/CircularProgress';



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
