export default function Education() {

    return (
        <>
            <div className="container p-5">
                <div className="row p-5">
                    <div className="col-5">
                        <img src="media/images/education.svg" alt="" style={{width: "100%"}}/>
                    </div>
                    <div className="col-1 p-5"></div>
                    <div className="col-6">
                        <h1 className="fs-2 mb-5">Free and open market education</h1>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href="" style={{textDecoration: "none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                        <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="" style={{textDecoration: "none"}}>TradingQ&A  style <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}