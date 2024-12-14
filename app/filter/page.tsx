import React from 'react'
import FilterCard from './filter-card'
import { VehicleMake } from '../type'

export default async function Filter() {

    const vehicleMakesResponse = await fetch(`${process.env.API_URL}/vehicles/GetMakesForVehicleType/car?format=json`)
    const vehicleMakesData = await vehicleMakesResponse.json()
    const vehicleMakes = vehicleMakesData.Results as VehicleMake[]

    return (
        <FilterCard
            vehicleMakes={vehicleMakes}
            fromYear={2015} />
    )
}