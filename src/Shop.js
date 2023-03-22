import { useState } from "react";
import Buttons from "./Buttons";
import { dataShop } from "./dataShop";
import None from "./None";

function Shop() {

    const [shop, setShop] = useState(dataShop);
    const [showMore, setShowMore] = useState(false);

    const chosenCategory = (category) => {
        const newShop = dataShop.filter(element => element.category === category)
        
        // вместо компонента None подставить в массив объект с подмененными полями
        // if(newShop.length === 0){
        //     let underConstruct = {
        //         id: -1,
        //         image: "",
        //         title: "Раздел в разработке",
        //         description: "",
        //         category: ""
        //     }
        //     newShop.push(underConstruct);
        // }

        setShop(newShop);
    }

    const underConstruction = () => {
        if(shop.length === 0){
        return (<div className="container"><None/></div>)
        }
    }

    const showText = (element) => {
        element.showMore = !element.showMore;
        setShowMore(!showMore)
    }

    return (
        <div >
            <div className="container">
                <h1>Наши товары</h1>
            </div>
            <div className="container">
                <Buttons chosenCategory={chosenCategory}/>
            </div>
            <div  className="items-container">
                {shop.map((element => {
                    const {id, image, title, description, showMore} = element;
                    return (
                        <div key={id} className="items-container">
                            <div className="item-container">
                                <h3>{title}</h3>
                                <img className="item-img" src={image} alt="item"/>
                                <p className="par">{showMore ? description : description.substring(0, 170) + "..."}<button className="showMore" onClick={()=> showText(element)}>{showMore ? "меньше" : "читать дальше"}</button></p>
                            </div>
                        </div>
                    )
                }))}
            </div>
            { underConstruction() }
        </div>
    )
}

export default Shop;