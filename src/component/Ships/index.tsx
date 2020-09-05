import React from 'react';
import { useShipsQuery } from '../../generated/graphql';
import Ships from './Ships';
import CircularProgress from '@material-ui/core/CircularProgress';

const ShipContainer = () => {
    const { data, loading, error } = useShipsQuery();

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

    return <Ships data={data} />

}

export default ShipContainer;
