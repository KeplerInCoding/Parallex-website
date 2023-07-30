import { useState } from "react";


function Cards({id, name, info, image, price, removeTour}){

    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`


    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return(
        <div className="w-64 h-[450px] bg-white m-2 flex flex-col items-center justify-between shadow-sm shadow-black hover:scale-[1.02] duration-100 hover:shadow-lg hover:shadow-black">
            <div className="h-60 w-60 mb-2">
                <img className="object-cover aspect-square mt-2" src={image} alt="loading..."></img>
            </div>

            <div>
                <div>
                    <div className="ml-2 font-bold text-emerald-600">{`$${price}`}</div>
                    <div className="ml-2 font-extrabold">{name}</div>
                </div>

                <div className="ml-2 mr-2 text-xs font-semibold">
                    {description}
                    <span className="text-blue-500 font-bold hover:cursor" onClick={readmoreHandler}>
                        {readmore ? ` Show less` : ` Read more`}
                    </span>
                </div>
            </div>

            <div>
                <button className="bg-pink-100 border border-pink-700 rounded-lg w-52 text-sm p-1 font-bold m-2 hover:bg-pink-200/70" onClick={() => removeTour(id)}>Not Interested</button>
            </div>
        </div>
    )
}

export default Cards;