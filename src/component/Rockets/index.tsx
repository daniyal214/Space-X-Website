import React from 'react';
import { useRocketsQuery } from '../../generated/graphql';
import Rockets from './Rockets';
import CircularProgress from '@material-ui/core/CircularProgress';


const RocketContainer = () => {
    const { data, loading, error } = useRocketsQuery();

    if (loading) {
        return <div>
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                </div>
    }

    if (error || !data) {
        console.log('error', error)
        return <div> There was an error</div>
    }

    return <Rockets data={data} />

}

export default RocketContainer;
