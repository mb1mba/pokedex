import React from "react";
import './item.css'

function Item({element}){
    const name = element.name;
    const image = element.sprites.default;
    const description = element["flavor_text_entries"][0].text;
    const cost = element.cost;
    const category = element.category.name;

    return(
    <div className="datas-container">
        <div data-aos="fade-up">
            <div className="item-container">

                <div className="card">
                    <div className="item-image-container">
                        <img className="item-image" src={image}></img>
                    </div>

                    <div className="item-datas">
                        <h3>{name}<span className="item-category">{category}</span></h3>
                        <div className="cost-container">
                            <p className="item-cost">{cost ? cost : "Not for sell"}</p>
                            {cost ? <img className="pokedollar" src="../pokedollar.svg"></img> : null}
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>        
    )
}

export default React.memo(Item)
