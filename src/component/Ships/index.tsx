import React from 'react';
import { useShipsQuery } from '../../generated/graphql';
import Ships from './Ships';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props {
    data: {
        abs: number
        active: boolean
        attempted_landings: number
        class: number
        home_port: string
        ship_id: string
        image: string[]
        imo: number
        missions: {
            flight: number[]
            name: string[]
        }
        ship_model: string
        ship_name: string
        roles: string[]
        speed_kn: string
        status: string
        successful_landings: number
        ship_type: string
        weight_kg: number
        year_built: number
    }
}

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
