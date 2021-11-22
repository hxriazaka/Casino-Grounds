import './Components.css'

const Game = ({image, title, price, bonuses, wager, bg, link}) => {
    return ( 
        <div className="game container">
            <div className="row c1 container">
                    <div className="col-4 d-flex justify-content-center ps-0">
                        <div >
                            <div className='c1-0 d-flex justify-content-center' style={{backgroundColor: bg}}>
                                <img src={image} alt="" className='img1 img-fluid align-self-center '/>
                            </div>                           
                            <a href="#" className='c1-p' >
                                <p className="fw-bold d-flex justify-content-center ">REVIEW</p>
                            </a> 
                        </div>
                        <h5 className='align-self-center fw-bold ps-4 c1-1'>{title}</h5>
                    </div>
                    <div className="col-3 d-flex justify-content-center c1-2">
                        <img src="https://res.cloudinary.com/casinogrounds/image/upload/v1620833116/reactapp/cg-gift-icon.svg" alt="" className='img2'/>
                        <div className='align-self-center'>
                            <p className='fw-bold d-flex ps-2'>{price}</p>
                            <p >{bonuses}</p>
                        </div>
                    </div>
                    <div className="col-3 d-flex justify-content-center c1-3">
                        <img src="https://res.cloudinary.com/casinogrounds/image/upload/v1620830977/reactapp/cg-coin-icon.svg" alt="" className='img2'/>
                        <div className='align-self-center ps-2'>
                            <p className='fw-bold'>{wager}</p>
                            <p >Wager</p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-self-center ">
                        <a href={link}>
                            <button>
                                    Play Now 
                            </button>
                        </a>
                    </div>                
            </div>
            <div className="row c2 container d-flex justify-content-between">
                    <div className="col-4 d-flex justify-content-star ps-0">
                        <div >
                            <div className='c2-0 d-flex justify-content-center' style={{backgroundColor: bg}}>
                                <img src={image} alt="" className='img1 img-fluid align-self-center '/>
                            </div>                           
                            <a href="#" className='c2-p' >
                                <p className="fw-bold d-flex justify-content-center ">REVIEW</p>
                            </a> 
                        </div>
                    </div>
                    <div className="col-8 d-block c2-2">
                        <p className='d-flex justify-content-start fw-bold c2-1 mb-2' style={{fontSize: '17px',}}>{title}</p>
                        <div className='d-block mb-2' >
                            <p className=' d-flex justify-content-start fw-bold' style={{fontSize: '13px',}}>{price}</p>
                            <p className=' d-flex justify-content-start' style={{fontSize: '13px'}}>{bonuses}</p>
                        </div>
                        <div className="d-flex  align-self-end ">
                            <a href={link}>
                                <button>
                                        Play Now 
                                </button>
                            </a>
                        </div>   
                    </div>            
            </div>
        </div>
     );
}
 
export default Game;