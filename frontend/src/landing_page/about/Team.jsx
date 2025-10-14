export default function Team() {

    return (
        <>
            <div className="container p-5" style={{marginTop: "-11rem"}}>
                <div className="row p-5 mb-5">
                    <h1 className="text-center fs-3">People</h1>

                </div>
                <div className="row p-5 mt-5 text-muted mx-5" style={{fontSize: "1rem", lineHeight: "1.8", display: "flex", justifyContent: "space-between"}}>
                    <div className="col-5 p-5 text-center" style={{marginTop: "-8rem"}}>
                       <img src="media/images/nithinKamath.jpg" alt="nithinKamath" style={{width: "90%", borderRadius: "100%"}} />
                       <p className="fs-5 mt-4">Nithin Kamath</p>
                       <p>Founder, CEO</p>
                    </div>
                    <div className="col-7 p-5" style={{marginTop: "-7rem", fontSize: "1rem", lineHeight: "1.7rem"}}>
                        <p>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p>
                        <p>
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p>
                            Playing basketball is his zen.
                        </p>
                        <p>
                            Connect on <a href="" style={{textDecoration: "none"}}>Homepage</a> / <a href="" style={{textDecoration: "none"}}>TradingQnA</a> / <a href="" style={{textDecoration: "none"}}>Twitter</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}