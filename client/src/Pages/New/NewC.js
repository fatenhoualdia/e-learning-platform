import React, { useState } from "react";
import "./NewC.css";
import { useDispatch } from "react-redux";
import Add from "../../Components/AddCours/Add"
import Sidebar from "../../Fixedhash/Sidebar/Sidebar";
import Navig from "../../Fixedhash/Navigation/Navig";
function NewC() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navig />
        <Add />
      </div>
    </div>
  );
}
export default NewC;

