import React from "react";
import "./ProgressBar.scss";

export interface ProgressBarProps {
    progressPercentage: number;
}

const ProgressBar: React.FunctionComponent<ProgressBarProps> = (
    props
): JSX.Element => {
    return (
        <div data-testid="progress-bar" className="progress-bar">
            <div data-testid="bar" className="bar" style={{ width: `${props.progressPercentage}%` }} />
        </div>
    );
};

export default ProgressBar;
