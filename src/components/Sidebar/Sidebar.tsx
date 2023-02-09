import React from 'react'
import './Sidebar.scss';
import ProgressBar from '../ProgressBar/ProgressBar';

interface progressprops {
    data: {
        progress: {
            id: string;
            progress: number;
        }[];
    }
}

const Sidebar: React.FunctionComponent<progressprops> = (data) => {
    const lessons = [
        {
            id: 'abc',
            name: 'Relations and functions'
        },
        {
            id: 'klmansfkj',
            name: 'Trigonometric functions'
        },
        { name: 'Complex numbers' },
        { name: 'Linear inequalities', },
        { name: 'Permutations and combinations' },
        { name: 'Binomial theorem' },
        { name: 'Sequence and series' },
        { name: 'Straight lines' },
        { name: 'Conic sections' },
        { name: 'Introduction to three dimensional geometry' },
        { name: 'Limits' },
        { name: 'Derivatives' },
        { name: 'Statistics' },
        { name: 'Probability' }
    ]

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
                    {lessons.map(lesson =>
                        <li className='sidebar-content-li'>
                            <span className='sidebar-content-li-description'>
                                {lesson.name}
                            </span>
                            {data.data.progress.map((p) => {
                                return (
                                    <>
                                        {lesson.id === p.id ? <ProgressBar progressPercentage={p.progress} /> : (<div className='li-content-bar'></div>)}
                                    </>
                                )
                            })}

                        </li>)}
                </span>
            </div>


        </div>
    )
}

export default Sidebar
