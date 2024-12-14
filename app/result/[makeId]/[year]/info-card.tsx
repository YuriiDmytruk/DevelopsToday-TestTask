'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { VehicleInfo } from '@/app/type';
import { Separator } from '@radix-ui/react-dropdown-menu';

type InfoCardProps = {
    vehiclesInfo: VehicleInfo[];
};

const InfoCard: FC<InfoCardProps> = ({ vehiclesInfo }) => {
    const router = useRouter();

    const handleReturnClick = () => {
        router.push('/filter');
    };

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <Card className="w-full max-w-[500px]">
                <CardHeader>
                    <CardTitle>
                        Vehicle make: {vehiclesInfo[0].Make_Name}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <div>Models:</div>
                    <Separator />
                    <div className="flex flex-wrap gap-2">
                        {vehiclesInfo.map((vehicle) => (
                            <Badge key={vehicle.Model_ID}>
                                {vehicle.Model_Name}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" onClick={handleReturnClick}>
                        Return
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default InfoCard;
