export default function Hero() {

    return (
        <>
            <div className="container mb-5 p-5 mt-5" style={{marginTop: "-5rem"}}>
                <div className="row text-center p-5">
                
                    <img src="media/images/homeHero.svg" alt="Hero Image" className="mb-4" style={{width: "65%", margin: "auto"}}/>

                    <h1 className="mt-5 fs-2">Invest in everything</h1>

                    <p className="fs-5 mb-5">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

                    <button className="p-2 btn fs-5" style={{width: "27%", margin: "0 auto", backgroundColor: "#387ed1", color: "white", borderRadius: "3px"}}>Sign up for free</button>
                </div>
            </div>
        </>
    );
}