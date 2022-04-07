import "./style.css";
import Sidebar from "../../sidebar";
import Navbar from "../../navbar";
import Datatable from "../../datatable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
