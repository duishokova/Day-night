import React from "react";
import "./day.scss";

function Day({ toggled, onClick }) {
    return (
        <div onClick={onClick} className={`day${toggled ? " night" : ""}`}>
            <div className="title">
                <div className="circle" />
                <div className="circle" />
            </div>
            <div>
                <div className="star sm" />
                <div className="star sm" />
            </div>
        </div>
    );
}

export default Day;