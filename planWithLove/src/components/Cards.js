import { useState } from "react";


function Cards({id, name, info, image, price, removeTour}){

    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`


    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return(
        <div className="w-64 flex flex-col items-center shadow-sm shadow-black">
            <div className="h-60 w-60">
                <img className="object-cover aspect-square mt-2" src={image} alt="loading..."></img>
            </div>

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