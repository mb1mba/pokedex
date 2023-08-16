import React from "react";
import GenericList from "../components/GenericList";
import { AbilitiesContext } from "../context/AbilitiesContext";
import Ability from "../components/Ability";

function Abilities() {
  return (
    <GenericList context={AbilitiesContext} DisplayComponent={Ability} />
  );
}

export default React.memo(Abilities);
