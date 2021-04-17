import React, { Component } from 'react';
import './card.css';
import {Title} from './title/Title';
import {MiddleSection} from './middle-section/MiddleSection';
import {RequestControlActions} from './request-control-actions/request-control-actions';
import {RequestDetails} from './request-details/RequestDetails';

export default class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <div className="card">
                <Title></Title>
                <MiddleSection></MiddleSection>
                <RequestControlActions></RequestControlActions>
                <RequestDetails></RequestDetails>
            </div>
        );
    }
}