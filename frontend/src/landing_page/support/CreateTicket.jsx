export default function CreateTicket() {

    return (
        <>
            <div className="px-5">
                <div className="row">

                    <div style={{ padding: "6vh 8vw 6vh 6vw" }} className="col-9">

                        <div className="option" style={{ marginBottom: "4vh" }}>
                            <div style={{ width: "100%", border: "2px solid #f6f6f6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                <div className="d-inline-flex justify-content-between align-items-center" style={{ width: "100%", paddingRight: "1rem" }}>
                                    <div className="right">
                                        <i className="fa-solid fa-circle-plus" style={{ padding: "1rem 2rem 1rem 1rem", backgroundColor: "#f7fbfe" }}></i>
                                        <p className="d-inline">
                                            &nbsp; Account Opening
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="collapse" id="collapseExample1" style={{ width: "98%", margin: "auto" }}>
                                <div className="card card-body">
                                    <ul>
                                        <a href="" style={{ textDecoration: "none" }}><li>Resident individual</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Minor</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Non Resident Indian (NRI)</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Company, Partnership, HUF and LLP</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Glossary</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="option" style={{ marginBottom: "4vh" }}>
                            <div style={{ width: "100%", border: "2px solid #f6f6f6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                <div className="d-inline-flex justify-content-between align-items-center" style={{ width: "100%", paddingRight: "1rem" }}>
                                    <div className="right">
                                        <i className="fa-regular fa-circle-user" style={{ padding: "1rem 2rem 1rem 1rem", backgroundColor: "#f7fbfe" }}></i>
                                        <p className="d-inline">
                                            &nbsp; Your Zerodha Account
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="collapse" id="collapseExample2" style={{ width: "98%", margin: "auto" }}>
                                <div className="card card-body">
                                    <ul>
                                        <a href="" style={{ textDecoration: "none" }}><li>Your Profile</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Account modification</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Client Master Report (CMR) and Depository Participant (DP)</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Nomination</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Transfer and conversion of securities</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>General</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="option" style={{ marginBottom: "4vh" }}>
                            <div style={{ width: "100%", border: "2px solid #f6f6f6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                <div className="d-inline-flex justify-content-between align-items-center" style={{ width: "100%", paddingRight: "1rem" }}>
                                    <div className="right">
                                        <i className="fa-regular fa-circle-play" style={{ padding: "1rem 2rem 1rem 1rem", backgroundColor: "#f7fbfe" }}></i>
                                        <p className="d-inline">
                                            &nbsp; Kite
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="collapse" id="collapseExample3" style={{ width: "98%", margin: "auto" }}>
                                <div className="card card-body">
                                    <ul>
                                        <a href="" style={{ textDecoration: "none" }}><li>IPO</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Trading FAQs</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Margin Trading Facility (MTF) and Margins</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Charts and orders</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Alerts and Nudges</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>General</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="option" style={{ marginBottom: "4vh" }}>
                            <div style={{ width: "100%", border: "2px solid #f6f6f6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                                <div className="d-inline-flex justify-content-between align-items-center" style={{ width: "100%", paddingRight: "1rem" }}>
                                    <div className="right">
                                        <i className="fa-solid fa-indian-rupee-sign" style={{ padding: "1rem 2rem 1rem 1rem", backgroundColor: "#f7fbfe" }}></i>
                                        <p className="d-inline">
                                            &nbsp; Funds
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="collapse" id="collapseExample4" style={{ width: "98%", margin: "auto" }}>
                                <div className="card card-body">
                                    <ul>
                                        <a href="" style={{ textDecoration: "none" }}><li>Add money</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Withdraw money</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Add bank accounts</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>eMandates</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="option" style={{ marginBottom: "4vh" }}>
                            <div style={{ width: "100%", border: "2px solid #f6f6f6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                                <div className="d-inline-flex justify-content-between align-items-center" style={{ width: "100%", paddingRight: "1rem" }}>
                                    <div className="right">
                                        <i className="fa-solid fa-magnifying-glass" style={{ padding: "1rem 2rem 1rem 1rem", backgroundColor: "#f7fbfe" }}></i>
                                        <p className="d-inline">
                                            &nbsp; Console
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="collapse" id="collapseExample5" style={{ width: "98%", margin: "auto" }}>
                                <div className="card card-body">
                                    <ul>
                                        <a href="" style={{ textDecoration: "none" }}><li>Portfolio</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Corporate actions</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Funds statement</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Reports</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Profile</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Segments</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="option">
                            <div style={{ width: "100%", border: "2px solid #f6f6f6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
                                <div className="d-inline-flex justify-content-between align-items-center" style={{ width: "100%", paddingRight: "1rem" }}>
                                    <div className="right">
                                        <i className="fa-regular fa-circle-check" style={{ padding: "1rem 2rem 1rem 1rem", backgroundColor: "#f7fbfe" }}></i>
                                        <p className="d-inline">
                                            &nbsp; Coin
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="collapse" id="collapseExample6" style={{ width: "98%", margin: "auto" }}>
                                <div className="card card-body">
                                    <ul>
                                        <a href="" style={{ textDecoration: "none", paddingBottom: "5vh" }}><li>Mutual funds</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>National Pension Scheme (NPS)</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>FixedDeposit (FD)</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Features on Coin</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>Payments and Orders</li></a>
                                        <a href="" style={{ textDecoration: "none" }}><li>General</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-3" style={{ marginLeft: "-6rem", marginTop: "2.6rem" }}>
                        <div className="updates" style={{ borderLeft: "8px solid orange", backgroundColor: "#fff4e6" }}>
                            <ul>
                                <a href=""><li style={{ fontSize: "1.1rem", paddingTop: "1rem"}}>Surveillance measure on scrips - October 2025</li></a>
                                <a href=""><li style={{ fontSize: "1.1rem", paddingTop: "1rem", paddingBottom: "1rem"}}>Rights Entitlements listing in October 2025</li></a>
                            </ul>
                        </div>

                        <div className="quick-links">
                            <p style={{border: "2px solid #f6f6f6", padding: "1rem", backgroundColor: "#f6f6f6"}}>Quick Links</p>
                            <p style={{border: "2px solid #f6f6f6", padding: "1rem", marginTop: "-1rem"}}><a href="" style={{textDecoration: "none", marginBottom: "1rem"}}>1. Track account opening</a></p>
                            <p style={{border: "2px solid #f6f6f6", padding: "1rem", marginTop: "-1rem"}}><a href="" style={{textDecoration: "none", width: "100px"}}>2. Track segment activation</a></p>
                            <p style={{border: "2px solid #f6f6f6", padding: "1rem", marginTop: "-1rem"}}><a href="" style={{textDecoration: "none"}}>3. Intraday margins</a></p>
                            <p style={{border: "2px solid #f6f6f6", padding: "1rem", marginTop: "-1rem"}}><a href="" style={{textDecoration: "none"}}>4. Kite user manual</a></p>
                            <p style={{border: "2px solid #f6f6f6", padding: "1rem", marginTop: "-1rem"}}><a href="" style={{textDecoration: "none"}}>5. Learn how to create a ticket</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}