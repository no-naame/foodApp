
import RestCard from "./RestCard";
import {useEffect, useState} from "react";
import Loading from "../assets/Loading.json"
import Lottie from "lottie-react";
import {Link} from "react-router-dom";


const Main = () => {
    let [resList1,setResList1] = useState([])
    const [filteredList,setFilteredList] = useState([])
    let [searchText,setsearchText] = useState("")

    let [x,setx] = useState((10))


    useEffect(()=>{
        fetchData();
    }, []);


    const fetchData = async ()=>{
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6333324&lng=77.0874664&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://foodfire-server-cv4o.onrender.com/api/restaurants?lat=28.6333324&lng=77.0874664&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        setResList1(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }

    return resList1.length===0 ? <Lottie animationData={Loading} /> :(
        <div className="main">
            <div className="filter-btn">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search Restaurants" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value)
                        const searchFilter = resList1.filter((res)=>{
                            return res.info && res.info.name && res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilteredList(searchFilter)
                    }}/>

                </div>
                <div className="button">
                    <a onClick={() => {
                        const filteredList = resList1.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setResList1(filteredList)
                    }
                    } href="#" className="link">
                        <svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg'
                             className="link__svg"
                             aria-labelledby="link1-title link1-desc">
                            <title id="link1-title">Come quick and click this</title>
                            <desc id="link1-desc">A rotating link with text placed around a circle with an arrow
                                inside
                            </desc>

                            <path id="link-circle" className="link__path"
                                  d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                                  stroke="none" fill="none"/>

                            <path className="link__arrow" d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"
                                  fill="none"/>

                            <text className="link__text">
                                <textPath href="#link-circle" stroke="none">
                                    Top Rated Restaurants
                                </textPath>
                            </text>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="res-container">
                {filteredList.map((restaurant) => (
                    <RestCardLink key={restaurant.info.id} id={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}
const RestCardLink = ({ id, resData }) => (
    <Link to={`/restaurants/${id}`}>
        <RestCard resData={resData} />
    </Link>
);

export default Main;