import { useEffect, useState } from "react";

const Maps = () => {
    const [search, setSearch] = useState("");
    const [openCurrent, setOpenCurrent] = useState(false);
    const [locations, setLoctions] = useState([]);
    const [showLocations, setShowLocations] = useState(false);
    const [recentSearch, setRecentSearch] = useState([]);

    useEffect(() => {
        if (search.length > 2) {
            getSearch();
        }
    }, [search])

    useEffect(() => {
        localStorage.setItem("history", JSON.stringify(recentSearch))
    },
        [recentSearch])

    const getLatLong = () => {
        navigator.geolocation.getCurrentPosition(success, error)
    }

    const success = (position) => {
        const coords = {
            lat: position.coords.latitude,
            long: position.coords.longitude
        }
        fetchData(coords)
    }

    const fetchData = async (coords) => {
        const latlang = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=" + coords.lat
            + "&lng=" + coords.long + "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const data = await fetch(latlang);
        const json = await data.json();
        console.log(json);
    }

    function error() {
        console.error("Sorry, no position available.");
    }

    const getResAdd = async (location) => {
        const data = await fetch("https://www.swiggy.com/dapi/misc/address-recommend?place_id=" + location.place_id);
        const json = await data.json();
        const coords = {
            lat: json.data[0].geometry.location.lat,
            long: json.data[0].geometry.location.lng
        }

        const items = JSON.parse(localStorage.getItem("history")) || []
        setRecentSearch([...items, location])
    }

    const getSearch = async () => {
        if(localStorage.getItem("searchData") && localStorage.getItem("searchData")[search]){
            setLoctions(JSON.parse(localStorage.getItem("searchData")[search]));
        }else{
        const data = await fetch("https://www.swiggy.com/dapi/misc/place-autocomplete?input=+" + search + "&types=")
        const json = await data.json();
        const cachedData = JSON.parse(localStorage.getItem("searchData")) || {} ;
        cachedData[search] = json.data;
        localStorage.setItem("searchData" , JSON.stringify(cachedData))
        setLoctions(json.data);
        setShowLocations(true);
        }
    }

    return (
        <div className="flex flex-row justify-center h-[79dvh] ">
            <div className="w-[60%] flex flex-col mt-10 mb-10 ">
                <input className="border  w-full p-3" id="searchInput" type="search"
                    onFocus={() => setOpenCurrent(true)}
                    onBlur={() => {
                        setTimeout(() => {
                            setShowLocations(false);
                        }, 200); // Small delay (in milliseconds)
                    }}
                    placeholder="Search for area, street name.."
                    value={search}
                    onChange={(e) => {                   
                        setSearch(e.target.value)
                    }}
                />
                {(openCurrent && search.length < 3) && (<div className="border m-4 cursor-pointer hover:font-bold"
                    onClick={() => getLatLong()}
                >
                    <span>📍 Get current location - Using GPS</span>
                </div>)}

                <div className="border-1-white shadow-2xl">
                    <ul className="flex flex-col">
                        {showLocations &&  search && locations?.length > 0 && locations.map((location) => (
                            <li className="cursor-pointer border-b-1 border-gray-400 y p-4 mx-3 hover:text-orange-400"
                                onClick={() => {
                                    return getResAdd(location)
                                }}>
                                📍{location.description}

                            </li>
                        ))}
                        {recentSearch.length>0 &&  <p className="p-2 m-2 text-sm">Recent Searches</p> }
                        {recentSearch && recentSearch.map((item,index) => <li className={"p-2 m-2  cursor-pointer hover:text-orange-400" +( recentSearch.length - 1 === index ? "" : " border-b-1")  } >
                            {item.description}
                        </li>)}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Maps;