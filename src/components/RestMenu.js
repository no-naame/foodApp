import {useEffect,useState} from "react";
import Lottie from "lottie-react";
import Loading from "../assets/Loading.json"
import {useParams} from "react-router-dom";
import {MENU_API1,MENU_IMG} from "../assets/contents";

const RestMenu = () => {

    const [resInfo,setResInfo] = useState(null)

    const fetchId  = useParams()
    console.log(fetchId.resId)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const data = await fetch(MENU_API1+fetchId.resId);

        const json = await data.json();
        setResInfo(json.data);
        console.log(json.data)
        // console.log(resInfo?.cards[0]?.card?.card)
        console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards)
    }
    if(resInfo===null) return <Lottie animationData={Loading}/>;

    // const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (

        <div className="menu">
            {/*<h2>{cuisines}</h2>*/}
            {/*<h2>{costForTwoMessage}</h2>*/}
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} Rs.{`  ${(item.card.info.price ? item.card.info.price : item.card.info.defaultPrice) / 100}  `}

                        <img src={MENU_IMG + item.card.info.imageId} alt=""/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestMenu;