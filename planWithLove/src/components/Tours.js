import Cards from './Cards';


function Tours ({tours, removeTour}) {
    return(
        <div>
            <div className="bg-slate-600 h-96">Plan With Love</div>
            <div>
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