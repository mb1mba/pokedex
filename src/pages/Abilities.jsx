import React from "react";
import GenericList from "../components/GenericList";
import { AbilitiesContext } from "../context/AbilitiesContext";
import Ability from "../components/Ability/Ability";
function Abilities() {
  return (
    <div className="abilities-container">
        <GenericList context={AbilitiesContext} DisplayComponent={Ability} />
    </div>
  );
}

export default React.memo(Abilities);
