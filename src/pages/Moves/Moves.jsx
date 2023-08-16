import React from "react";
import Move from "../../components/Move";
import { MovesContext } from "../../context/MovesContext";
import GenericList from "../../components/GenericList";

function Moves(){

    return(
        <> 
        <GenericList context={MovesContext} DisplayComponent={Move} />
        </>
    )
}

export default React.memo(Moves)  