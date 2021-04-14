import React, { Component } from 'react';
import './card.css';

export default class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <div className="card">
                <div>
                    <div className="title">
                        <span className="request-type">Cancel/recall payment, GBP </span>
                        <span className="amount">1000.00</span>
                    </div>
                    <div className="middle-section">
                        <span className="account-number">1234567890123456</span>
                        <span className="location"> (CB), </span>
                        <span className="account-name">KUIML Business Company</span>
                    </div>
                    <div className="request-controls-actions">
                        <div className = "request-controls">
                            <span className="icon1">icon1</span>
                            <span className="icon2">icon2</span>
                        </div>
                        <div className="actions">
                            <button className="reject">Reject</button>
                            <button className="authorise">Authorise</button>
                        </div>
                    </div>
                </div>
                <div id="full-details">
                    <a className="full-details-link" href="/submit.aspx">Full Details</a>
                </div>
                <div className="request-details">
                    <div className="section">
                        <span className="light-head">Request Reference</span>
                        <span className="black-head">SET29383ABCH</span>
                    </div>
                    <div className="section">
                        <span className="light-head">Category</span>
                        <span className="black-head">Customer Services</span>
                    </div>
                    <div className="section">
                        <span className="light-head">Request Status</span>
                        <span className="black-head">Pending Authorisation</span>
                    </div>
                </div>
            </div>
        );
    }
}