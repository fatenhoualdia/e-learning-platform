import "./Liste.css";
import Sidebar from "../../Fixedhash/Sidebar/Sidebar";
import Navig from "../../Fixedhash/Navigation/Navig";
import Datatable from "../../Fixedhash/Datatable/Datatable";

const Liste = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContaineruser">
        <Navig />
        <Datatable />
      </div>
    </div>
  );
};

export default Liste;

