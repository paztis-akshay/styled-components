import React from 'react';
import './title.css';

export const Title = (props) => {
    return (
        <div className="title">
            <span className="request-type">Cancel/recall payment, GBP </span>
            <span className="amount">1000.00</span>
        </div>
    )
}