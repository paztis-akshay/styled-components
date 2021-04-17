import React from 'react';
import './request-control-actions.css';

export const RequestControlActions = (props) => {
    return (
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
    )
}