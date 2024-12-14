'use client';

import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MakesDropdown from './makes-dropdown';
import YearsDropdown from './years-dropdown';

import { generateStaticParams } from '@/util/generate-static-params';

import { VehicleMake } from '../type';

type FilterCardProps = {
    vehicleMakes: VehicleMake[];
    fromYear: number;
};

const FilterCard: FC<FilterCardProps> = ({ vehicleMakes, fromYear }) => {
    const [vehicleMake, setVehicleMake] = useState<VehicleMake | null>(null);
    const [year, setYear] = useState<string | null>(null);

    const router = useRouter();

    const handleNextClick = () => {
        if (year && vehicleMake)
            router.push(
                generateStaticParams({
                    makeId: vehicleMake.MakeId.toString(),
                    year,
                })
            );
    };

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <Card className="w-full max-w-[500px]">
                <CardHeader>
                    <CardTitle>Choose vehicle make and year</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-around">
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

                    <Button
                        variant="default"
                        onClick={handleNextClick}
                        disabled={!year && !vehicleMake}
                    >
                        Next
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default FilterCard;
