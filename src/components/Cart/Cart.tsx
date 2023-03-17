import React from "react";
import cartImg from "../../assets/cart-profile.png";
import "./Cart.scss";
import ProgressBar from "../ProgressBar/ProgressBar";
interface ChapterCardProps {
    data: {
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
    };
    name: {
        id?: string;
        name: string;
    }
}

export const Cart: React.FunctionComponent<ChapterCardProps> = (
    { data, name }
): JSX.Element => {
    const cartId = name.name.split(" ")[0]

    return (
        <div className="cart" id={`${cartId}`}>
            <div className="cart-content">
                <div className="cart-content-head">
                    <div className="head-profile-img">
                        <img src={cartImg} alt="logo" className="cart-profile-img" />
                        <span className="profile-img-heading">{name?.name}</span>
                    </div>
                    <span>
                        {1100 - data.points_to_earn}/1100 Mastery points
                        <ProgressBar progressPercentage={10} />
                    </span>
                </div>
                <div className="cart-content-details">
                    <div className="cart-content-details-l1">
                        {data.topics.map((item) => {
                            return (
                                <div className="details-l1-data" key={item.id}>
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
