import React from "react";
import { ItemsContext } from "../context/ItemsContext";
import Item from "../components/Item/Item";
import GenericList from "../components/GenericList";

function Items(){
    return(
        <div className="items-container">
            <GenericList context={ItemsContext} DisplayComponent={Item} />
        </div>
    )
}

export default React.memo(Items)  