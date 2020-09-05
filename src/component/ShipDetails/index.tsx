import React from 'react';
import { useShipsQuery } from '../../generated/graphql';
import { useParams } from 'react-router-dom'
import ShipDetails from './ShipDetails';
import CircularProgress from '@material-ui/core/CircularProgress';

const RocketContainer = () => {

    const { id } = useParams();


    const { data, loading, error } = useShipsQuery();


    if (loading) {
        return  <div>
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                </div>
    }

    if (error || !data) {
        return <div> There was an error</div>
    }

    const currentItem: any = data?.ships?.find(rocket => rocket?.ship_id === id)
    console.log(currentItem);
    return (<ShipDetails data={currentItem} />);

}

export default RocketContainer;
