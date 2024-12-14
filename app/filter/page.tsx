import React from 'react';

import FilterCard from './filter-card';
import ErrorCard from '@/components/ErrorCard/ErrorCard';
import Loading from '@/components/Loading/Loading';

import { VehicleMake } from '../type';

export default async function Filter() {
    const vehicleMakesResponse = await fetch(
        `${process.env.API_URL}/vehicles/GetMakesForVehicleType/car?format=json`
    );
    const vehicleMakesData = await vehicleMakesResponse.json();
    const vehicleMakes = vehicleMakesData.Results as VehicleMake[];

    if (!vehicleMakesResponse.ok) {
        return <ErrorCard />;
    }

    if (!vehicleMakes) {
        return <Loading />;
    }

    return <FilterCard vehicleMakes={vehicleMakes} fromYear={2015} />;
}
