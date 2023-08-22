import React from "react";
import Move from "../components/Move/Move";
import { MovesContext } from "../context/MovesContext";
import GenericList from "../components/GenericList";

function Moves(){

    return(
        <div class="moves-container"> 
            <GenericList context={MovesContext} DisplayComponent={Move} />
        </div>
    )
}

export default React.memo(Moves)  