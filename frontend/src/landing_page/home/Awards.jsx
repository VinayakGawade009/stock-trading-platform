export default function Awards() {

    return (
        <>
            <div className="container mt-5 p-5">
                <div className="row p-5">
                    <div className="col-6 p-5">
                        <img src="media/images/largestBroker.svg" alt="AwardImage" />
                    </div>
                    <div className="col-6 p-5 mt-5">
                        <h1>Largest stock broker in India</h1>
                        <p className="mb-5">2+ million Zerodha clients contribute to 15% of all retail order volumes in India daily by trading and investing in:</p>

                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li>
                                        <p>Futures and Options</p>
                                    </li>
                                    <li>
                                        <p>Commodity derivatives</p>
                                    </li>
                                    <li>
                                        <p>Currency derivatives</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>
                                        <p>Stocks & IPOs</p>
                                    </li>
                                    <li>
                                        <p>Direct mutual funds</p>
                                    </li>
                                    <li>
                                        <p>Bonds and Govt. Securities</p>
                                    </li>
                                </ul>
                            </div>
                            <img src="media/images/pressLogos.png" alt="Press Logo" style={{width: "90%"}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}