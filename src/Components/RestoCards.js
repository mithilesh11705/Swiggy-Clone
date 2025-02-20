import { CDN_URL } from "../Utils/constants";

const RestoCards = (props) => {
  const { resdata } = props;
  return (
    <div className="m-4 p-2 w-[300px] bg-gray-100" rounded-lg>
      <img
        className=" rounded-lg "
        src={CDN_URL + resdata.info.cloudinaryImageId}
      />
      <h2 className=" font-bold py-5 text-lg">{resdata.info.name}</h2>
      <h4>{resdata.info.cuisines.join(",")}</h4>
      <h4>Rating: {resdata.info.avgRatingString}</h4>
      <h4 className="wrap">
        Delivery Time: {resdata.info.sla.deliveryTime} Minutes
      </h4>
    </div>
  );
};

export default RestoCards;
