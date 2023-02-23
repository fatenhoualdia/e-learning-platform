import "./Coursl.css";
import Sidebar from "../../Fixedhash/Sidebar/Sidebar";
import Navig from "../../Fixedhash/Navigation/Navig";
import DatatableCours from "../../Fixedhash/DatatableCours/DatatableCours";

function coursl() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navig />
        <DatatableCours />
      </div>
    </div>
  );
};


export default coursl