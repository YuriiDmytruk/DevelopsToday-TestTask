'use client'

import React, { FC, useState } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { VehicleMake } from '../type'
import MakesDropdown from './makes-dropdown'
import YearsDropdown from './years-dropdown'


type FilterCardProps = {
    vehicleMakes: VehicleMake[]
    fromYear: number
}

const FilterCard: FC<FilterCardProps> = ({ vehicleMakes, fromYear }) => {
    const [vehicleMake, setVehicleMake] = useState<VehicleMake | null>(null)
    const [year, setYear] = useState<string | null>(null)

    console.log(vehicleMake)

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <Card className='w-[800px]'>
                <CardHeader>
                    <CardTitle>Choose vehicle make and year</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='flex gap-4'>
                        <MakesDropdown
                            vehicleMakes={vehicleMakes}
                            vehicleMake={vehicleMake}
                            setVehicleMake={setVehicleMake}
                        />

                        <YearsDropdown
                            year={year}
                            setYear={setYear}
                            fromYear={fromYear}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default FilterCard