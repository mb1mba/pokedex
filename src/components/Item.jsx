import React from "react";
import { Link } from "react-router-dom";

function Item({item}){
    const name = item.name
    const image = item.sprites.default
    const description = item["flavor_text_entries"][0].text
    
    return(
        <div className="datas-container">
        <Link key={name} to={name}className="moves">
            <div data-aos="fade-up"> 
                <div className={`item-container`}>
                    <div className="item-desc">
                        <p className="item">{name}</p>
                    </div>

                    <div className="pokemon-move-characteristic">
                        <p className="move-description">{description}</p>
                        <img loading="lazy" src={image}></img>
                        </div>  
                    </div>
                    <hr/>
                </div>
        </Link> 
        </div>
    )
}

export default React.memo(Item)