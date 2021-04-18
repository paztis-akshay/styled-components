import React from 'react';
import {Title, RequestType, Amount} from '../../style-components/title-style';

export const TitleComponent = (props) => {
    return (
        <Title>
            <RequestType>Cancel/recall payment, GBP </RequestType>
            <Amount>1000.00</Amount>
        </Title>
    )
}