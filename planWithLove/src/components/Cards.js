import { useState } from "react";


function Cards({id, name, info, image, price, removeTour}){

    const [readmore, setReadmore] = useState(false);
    const description = `${info.substring(0,200)}....`


    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return(
        <div>
            <img src={image} alt="loading..."></img>

            <div>
                <div>
                    <div>{price}</div>
                    <div>{name}</div>
                </div>

                <div>
                    {description}
                    <span onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>

            <div>
                <button onClick={() => removeTour(id)}>Not Interested</button>
            </div>
        </div>
    )
}

export default Cards;