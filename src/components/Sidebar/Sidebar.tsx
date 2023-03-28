import React from "react";
import "./Sidebar.scss";
import ProgressBar from "../ProgressBar/ProgressBar";
import mainData from "../../Data/data.json";

interface load {
    loading: boolean;
}

interface progressprops extends load {
    data: {
        progress: {
            id: string;
            progress: number;
        }[];
    };
}

const Sidebar: React.FunctionComponent<progressprops> = (props) => {
    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <div className="sidebar-section-wrap">
                    <div className="sidebar-section-wrap-heading">
                        <h4 data-testid="sidebar-section-heading" className="sidebar-section-heading">17,400</h4>
                        <span className="sidebar-section-description">
                            Mastery points available in course
                        </span>
                    </div>
                </div>
                {props.loading ? <div data-testid="loader-container" className="loader-container">
                    <div className="spinner"></div>
                </div> : <span className="sidebar-content">
                    <li className="sidebar-content-li">
                        <h2 className="sidebar-content-li-head">Course summary</h2>
                    </li>
                    {mainData.map((lesson) => {
                        const name = lesson.name.split(" ")[0];
                        return (
                            <li className="sidebar-content-li">
                                <span className="sidebar-content-li-description">
                                    <a href={`#${name}`}>{lesson.name}</a>
                                </span>
                                {props.data.progress.map((p) => {
                                    return (
                                        <>
                                            {lesson.id === p.id ? (
                                                <div data-testid="progress-bar">
                                                    <ProgressBar progressPercentage={p.progress} />
                                                </div>
                                            ) : (
                                                <div data-testid="li-content-bar" className="li-content-bar"></div>
                                            )}
                                        </>
                                    );
                                })}
                            </li>
                        );
                    })}
                </span>}

            </div>
        </div>
    );
};

export default Sidebar;
