'use client';
import React from 'react';
import { Card } from '../ui/card';

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backBUttonLabel: string;
    backButtonHref: string;
    showSocial: string;
}

const CardWrapper = ({
    children,
    backBUttonLabel,
    backButtonHref,
    headerLabel,
    showSocial,
}: CardWrapperProps) => {
    return <Card className="w-[400px] shadow-md">{children}</Card>;
};

export default CardWrapper;
