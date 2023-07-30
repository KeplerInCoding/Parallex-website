import Cards from './Cards';


function Tours ({tours, removeTour}) {
    return(
        <div className="w-[900px] flex flex-col">
            <div className="text-center flex self-center justify-center text-4xl w-96 font-extrabold text-pink-700 m-10 border-dashed border-4 border-pink-700 rounded-lg p-3">Plan With Love</div>
            <div className="grid grid-cols-3 place-items-center">
                {
                    tours.map((tour)=>{
                        return <Cards {...tour} removeTour={removeTour}></Cards>
                    })
                }
            </div>


        </div>
    )
};

export default Tours;