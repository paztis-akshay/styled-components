import React from 'react';
import {MiddleSection, AccountNumber, Location, AccountName} from '../../style-components/middle-section-style';

export const MiddleSectionComponent = () => {
    return (
        <MiddleSection>
            <AccountNumber>1234567890123456</AccountNumber>
            <Location> (CB), </Location>
            <AccountName>KUIML Business Company</AccountName>
        </MiddleSection>
    )
}