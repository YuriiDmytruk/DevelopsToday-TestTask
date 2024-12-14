'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ErrorCard = () => {
    const router = useRouter();

    const handleReturnClick = () => {
        router.push('/filter');
    };

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <Card className="w-full max-w-[500px]">
                <CardHeader>
                    <CardTitle>
                        Oops something went wrong click to try again
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <Button variant="outline" onClick={handleReturnClick}>
                        Return
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default ErrorCard;
