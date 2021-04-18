import React from 'react';
import {RequestDetails, Section, LightHead, BlackHead, FullDetails, FullDetailsLink} from '../../style-components/request-details-style';

export const RequestDetailsComponent = () => {
    return (
        <>
            <FullDetails>
                <FullDetailsLink href="/#">Full Details</FullDetailsLink>
            </FullDetails>
            <RequestDetails>
                <Section>
                    <LightHead>Request Reference</LightHead>
                    <BlackHead>SET29383ABCH</BlackHead>
                </Section>
                <Section>
                    <LightHead>Category</LightHead>
                    <BlackHead>Customer Services</BlackHead>
                </Section>
                <Section>
                    <LightHead>Request Status</LightHead>
                    <BlackHead>Pending Authorisation</BlackHead>
                </Section>
            </RequestDetails>
        </>
    )
}