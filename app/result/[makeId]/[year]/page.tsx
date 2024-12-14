import React from 'react';

import InfoCard from './info-card';
import ErrorCard from '@/components/ErrorCard/ErrorCard';
import Loading from '@/components/Loading/Loading';

import { VehicleInfo } from '@/app/type';

export default async function Result({
    params,
}: {
    params: {
        makeId: string;
        year: string;
    };
}) {
    const queryParams = await params;

    const vehiclesInfoResponse = await fetch(
        `${process.env.API_URL}/vehicles/GetModelsForMakeIdYear/makeId/${queryParams.makeId}/modelyear/${queryParams.year}?format=json`
    );
    const vehiclesInfoData = await vehiclesInfoResponse.json();
    const vehiclesInfo = vehiclesInfoData.Results as VehicleInfo[];

    if (!vehiclesInfoResponse.ok) {
        return <ErrorCard />;
    }

    if (!vehiclesInfo) {
        return <Loading />;
    }

    return <InfoCard vehiclesInfo={vehiclesInfo} />;
}
