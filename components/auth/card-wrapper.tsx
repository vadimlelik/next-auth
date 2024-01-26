'use client';
import React from 'react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../ui/card';
import Header from './header';
import Social from './social';

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backBUttonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

const CardWrapper = ({
    children,
    backBUttonLabel,
    backButtonHref,
    headerLabel,
    showSocial,
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
        </Card>
    );
};

export default CardWrapper;
