import React from "react";
import "./ProgressBar.scss";

interface ProgressBarProps {
    progressPercentage: number;
}

const ProgressBar: React.FunctionComponent<ProgressBarProps> = (
    props
): JSX.Element => {
    return (
        <div className="progress-bar">
            <div className="bar" style={{ width: `${props.progressPercentage}%` }} />
        </div>
    );
};

export default ProgressBar;
