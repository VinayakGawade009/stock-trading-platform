export default function Pricing() {

    return (
        <>
            <div className="container p-5">
                <div className="row p-5">
                    <div className="col-5 p-5">
                        <h1 className="fs-2">Unbeatable pricing</h1>
                        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a href="" style={{textDecoration: "none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    
                    <div className="col-7" style={{margin: "auto", display: "flex", justifyContent: "flex-start"}}>
                        <div className="price" style={{display: "flex"}}>
                                
                            <img src="media/images/pricing0.svg" alt="price" style={{width: "62%"}} />
                            <p style={{fontSize: "0.7rem", marginTop: "2.9rem"}}>Free account
    opening</p>
                        </div>

                        <div className="price" style={{display: "flex"}}>
                            <img src="media/images/pricing0.svg" alt="price" style={{width: "52%"}} />
                            <p style={{fontSize: "0.7rem", marginTop: "2.9rem"}}>Free equity delivery
    and direct mutual funds</p>
                            
                        </div>

                        <div className="price" style={{display: "flex"}}>
                            <img src="media/images/pricing20.svg" alt="price" style={{width: "68%"}} />
                            <p style={{fontSize: "0.7rem", marginTop: "2.9rem"}}>Intraday and
    F&O</p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}