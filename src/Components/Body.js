import RestoCards from "./RestoCards"
import DataList from "../Utils/mockData";

  

const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input type="text" placeholder="Search for Food" />
          <button>Search</button>
        </div>
        <div className="resto-container">
         {
          DataList.map((restro) => <RestoCards  
          key ={restro.info.id}resdata={restro}/>)
         }
  
         
        </div>
      </div>
    );
  };
  

  export default Body;