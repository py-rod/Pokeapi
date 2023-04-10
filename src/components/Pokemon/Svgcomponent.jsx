import React from 'react';

function SVGComponent() {
    return (
        <svg height="80" width="100%" className="left-svg" style={{ display: "block", margin: 0, padding: 0 }}>
            <polyline
                points="0,75 70,75 90,38 664,38"
                style={{ fill: "none", stroke: "black", strokeWidth: 4 }}
            />
        </svg>
    );
}

export default SVGComponent;
