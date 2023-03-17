import React from 'react'
import './Sidebar.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import mainData from '../../Data/data.json';

interface progressprops {
    data: {
        progress: {
            id: string;
            progress: number;
        }[];
    }
}

const Sidebar: React.FunctionComponent<progressprops> = (data) => {
    return (
        <div className='sidebar'>

            <div className='sidebar-section'>
                <div className='sidebar-section-wrap'>
                    <div className='sidebar-section-wrap-heading'>
                        <h4 className='sidebar-section-heading'>17,400</h4>
                        <span className='sidebar-section-description'>
                            Mastery points available in course
                        </span>
                    </div>
                </div>
                <span className='sidebar-content'>
                    <li className='sidebar-content-li'>
                        <h2 className='sidebar-content-li-head'>
                            Course summary
                        </h2>
                    </li>
                    {mainData.map(lesson => {
                        const name = lesson.name.split(" ")[0]
                        return (
                            <li className='sidebar-content-li'>
                                <span className='sidebar-content-li-description'>
                                    <a href={`#${name}`}>
                                        {lesson.name}
                                    </a>
                                </span>
                                {data.data.progress.map((p) => {
                                    return (
                                        <>
                                            {lesson.id === p.id ? <ProgressBar progressPercentage={p.progress} /> : (<div className='li-content-bar'></div>)}
                                        </>
                                    )
                                })}

                            </li>)
                    }
                    )
                    }
                </span>
            </div>


        </div>
    )
}

export default Sidebar
