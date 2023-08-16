import React from "react";
import { ItemsContext } from "../context/ItemsContext";
import Item from "../components/Item";
import GenericList from "../components/GenericList";

function Items(){
    return(
        <GenericList context={ItemsContext} DisplayComponent={Item} />
    )
}

export default React.memo(Items)  