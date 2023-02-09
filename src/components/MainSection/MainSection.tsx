import React from 'react'
import { Cart } from '../Cart/Cart'
import './MainSection.scss';

interface cartProps {
    data: {
        class: string;
        subject: string;
        chapters: {
            annotation: string;
            name: string;
            points_to_earn: number;
            id: string;
            topics: {
                annotation: string;
                name: string;
                points_to_earn: number;
                id: string;
            }[];
        }[];
    }
}


const MainSection: React.FunctionComponent<cartProps> = (props) => {
    return (
        <div className='mainsection'>
            <Cart data={props.data.chapters[0]} />
        </div>
    )
}

export default MainSection