import React from "react";
import './Recommended.css';
import RecommendedItem from "./RecommendedItem";

const Recommended = () => {

    return (
        <div className="mt-4">
            <h2 className="Recommended-title">Polecane przez nas</h2>
                <input type="radio" name="slider" id="r-c-item-1" defaultChecked />
                <input type="radio" name="slider" id="r-c-item-2" />
                <input type="radio" name="slider" id="r-c-item-3" />
                <input type="radio" name="slider" id="r-c-item-4" />
                <input type="radio" name="slider" id="r-c-item-5" />
            <div className="Recommended mt-5">
                <RecommendedItem price='329 zł' title='Jordan Jumpman Pro' img='https://static.nike.com/a/images/t_default/f6ed1490-9e36-4994-b32d-098653245611/buty-meskie-jordan-jumpman-pro-j5vqXB.png' pos={1} />
                <RecommendedItem price='989 zł' title='Jordan Max Aura 4' img='https://static.nike.com/a/images/t_default/030bc0e1-869b-4751-b2fe-a85c78393831/buty-meskie-jordan-max-aura-4-bzn4qR.png' pos={2} />
                <RecommendedItem price='399 zł' title='Jordan 1 Lucky Green' img='https://www.sneakfreak.pl/userdata/public/gfx/25757/4039.png' pos={3} />
                <RecommendedItem price='699 zł' title='Air Jordan 1 Mid' img='https://static.nike.com/a/images/t_default/2016a636-2953-41b4-b496-55263f2b26bc/buty-air-jordan-1-mid-nTNrnK.png' pos={4} />
                <RecommendedItem price='569 zł' title='Jordan 1 Low Court Purple' img='https://onsetshoes.com/wp-content/uploads/2021/02/air-jordan-1-low-court-purple-white-1-1000.png' pos={5} />
            </div>
        </div>
    )

}

export default Recommended;