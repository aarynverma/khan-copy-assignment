import React from 'react'
import { Cart } from '../Cart/Cart'
import './MainSection.scss';
import mainData from '../../Data/data.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';


export interface cartProps {
    loading: boolean
}


const MainSection: React.FunctionComponent<cartProps> = (props) => {
    const chapters = useSelector((state: RootState) => state.Subject);

    return (
        <div className='mainsection'>

            {props.loading ?
                <div data-testid="loader-container" className="loader-container">
                    <div className="spinner"></div>
                </div> :
                <div data-testid="cart-container">
                    {mainData.map((cartData, id) => (
                        <Cart data={chapters.chapters[0]} name={cartData} />
                    ))}
                </div>}
        </div>
    )
}

export default MainSection