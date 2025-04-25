import { CDN_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const ItemList = (props) => {
    
    const { info } = props.data.item.card;
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addItem(props));
    }
    
    return (
        <div className="text-start m-4 flex justify-between">
            <div className="w-8/12">
                <p className="font-bold text-lg ">{info.name} </p>
                <p className="font-bold">
                    ₹{info.price ? info.price / 100 : info.defaultPrice / 100}
                </p>
                {
                    info.ratings.aggregatedRating.rating ? <p>⭐ {  info.ratings.aggregatedRating.rating}({info.ratings.aggregatedRating.ratingCountV2}) </p> : <></>
                }
                <p>{info.description} </p>
            </div>
            <div className="w-3/12 content-center relative">
                <img className="w-40 h-36 rounded-2xl" src={CDN_LINK + info.imageId} />
                <button className= "border-gray-300 border-2 bg-white font-bold cursor-pointer absolute bottom-0 rounded text-green-600 w-24 mx-8 hover:bg-gray-300"
                onClick={ addItemToCart  }
                >ADD</button>
            </div>
        </div>
    )
}

export default ItemList;