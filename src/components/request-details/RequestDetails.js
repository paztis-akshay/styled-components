import React from 'react';
import './request-details.css';

export const RequestDetails = () => {
    return (
        <>
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
        </>
    )
}