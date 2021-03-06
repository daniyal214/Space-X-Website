import React from 'react';
import { useLaunchesQuery } from '../../generated/graphql';
import Launch from './Launch';
import { GraphQLError } from 'graphql';
import CircularProgress from '@material-ui/core/CircularProgress';


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
