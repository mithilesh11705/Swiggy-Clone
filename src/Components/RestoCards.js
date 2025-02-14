import { CDN_URL } from "../Utils/constants";

const RestoCards = (props) => {
    const { resdata } = props;
    return (
      <div className="card">
        <img
          id="li"
          src={
            CDN_URL+resdata.info.cloudinaryImageId
          }
        />
        <h2>{resdata.info.name}</h2>
        <h4>{resdata.info.cuisines.join(",")}</h4>
        <h4>Rating: {resdata.info.avgRatingString}</h4>
        <h4>Delivery Time: {resdata.info.sla.deliveryTime} Minutes</h4>
      </div>
    );
  };
  
  export default RestoCards;