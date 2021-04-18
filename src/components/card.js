import React, { Component } from 'react';
import {Card} from '../style-components/card-style';
import {TitleComponent} from './title/Title';
import {MiddleSectionComponent} from './middle-section/MiddleSection';
import {RequestControlActionsComponent} from './request-control-actions/request-control-actions';
import {RequestDetailsComponent} from './request-details/RequestDetails';

export default class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <Card>
                <TitleComponent></TitleComponent>
                <MiddleSectionComponent></MiddleSectionComponent>
                <RequestControlActionsComponent></RequestControlActionsComponent>
                <RequestDetailsComponent></RequestDetailsComponent>
            </Card>
        );
    }
}