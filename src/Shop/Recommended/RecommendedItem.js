import React from "react";
import { Button } from "react-bootstrap";

const RecommendedItem = ({ pos, img, title, price }) => {

    const wrapperClassName = `Recommended-item shadow rounded-4 p-2 d-flex flex-column pb-5`

    const onClick = () => {
        if(document.querySelector(`#item-${pos}`).checked) console.log('Go to:', pos)
        
    }

    return (
        <label onClick={onClick} htmlFor={`r-c-item-${pos}`} id={`item-${pos}`} className={wrapperClassName}>
            <span className="Recommended-item-price h6">{price}</span>
            <img className="Recommended-item-img" src={img} alt="bucik" />
            <h3 className="Recommended-item-title mt-auto">{title}</h3>
            <h4 id={`click-${pos}`} className="Recommended-item-click d-non">Kliknij aby zobaczyć</h4>
        </label>
    )
}

export default RecommendedItem;