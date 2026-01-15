import "./Footer.css"

export default function Footer() {

    return (
        <>
            <footer className="border-top" style={{ backgroundColor: "#fbfbfb" }}>

                <div className="container p-5mt-5" >
                    <div className="footerLinks row mb-5 p-5">
                        <div className="col-3" style={{ fontSize: ".8rem" }}>
                            <img src="media/images/logo.svg" style={{ width: "50%" }} alt="Logo" />
                            <p>&copy; 2010 - 2025, Zerodha Broking Ltd.</p>
                            <p>All rights reserved.</p>
                            <div className="socials">
                                <i className="fa-brands fa-x-twitter"></i>
                                <i className="fa-brands fa-square-facebook"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                            <hr />
                            <div className="socials">
                                <i className="fa-brands fa-youtube"></i>
                                <i className="fa-brands fa-whatsapp"></i>
                                <i className="fa-brands fa-telegram"></i>
                            </div>
                        </div>

                        <div className="col">
                            <ul>
                                <li style={{ fontSize: "1.125rem" }}>Account</li>
                                <li>
                                    <a href="">Open demat account</a>
                                </li>
                                <li>
                                    <a href="">Minor demat account</a>
                                </li>
                                <li>
                                    <a href="">NRI demat account</a>
                                </li>
                                <li>
                                    <a href="">Commodity</a>
                                </li>
                                <li>
                                    <a href="">Dematerialisation</a>
                                </li>
                                <li>
                                    <a href="">Fund transfer</a>
                                </li>
                                <li>
                                    <a href="">MTF</a>
                                </li>
                                <li>
                                    <a href="">Referral program</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col">
                            <ul>
                                <li style={{ fontSize: "1.125rem" }}>Support</li>
                                <li>
                                    <a href="">Contact us</a>
                                </li>
                                <li>
                                    <a href="">Support portal</a>
                                </li>
                                <li>
                                    <a href="">How to file a complaint?</a>
                                </li>
                                <li>
                                    <a href="">Status of your complaints</a>
                                </li>
                                <li>
                                    <a href="">Bulletin</a>
                                </li>
                                <li>
                                    <a href="">Circular</a>
                                </li>
                                <li>
                                    <a href="">Z-Connect blog</a>
                                </li>
                                <li>
                                    <a href="">Downloads</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col">
                            <ul>
                                <li style={{ fontSize: "1.125rem" }}>Company</li>
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Philosophy</a>
                                </li>
                                <li>
                                    <a href="">Press & media</a>
                                </li>
                                <li>
                                    <a href="">Careers</a>
                                </li>
                                <li>
                                    <a href="">Zerodha Cares (CSR)</a>
                                </li>
                                <li>
                                    <a href="">Zerodha.tech</a>
                                </li>
                                <li>
                                    <a href="">Open source</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col">
                            <ul>
                                <li style={{ fontSize: "1.125rem" }}>Quick links</li>
                                <li>
                                    <a href="">Upcoming IPOs</a>
                                </li>
                                <li>
                                    <a href="">Brokerage charges</a>
                                </li>
                                <li>
                                    <a href="">Market holidays</a>
                                </li>
                                <li>
                                    <a href="">Economic calendar</a>
                                </li>
                                <li>
                                    <a href="">Calculators</a>
                                </li>
                                <li>
                                    <a href="">Markets</a>
                                </li>
                                <li>
                                    <a href="">Sectors</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-5 text-muted p-5" style={{ fontSize: "0.715rem" }}>

                        <p className="px-2">
                            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                        </p>
                        <p className="px-2">
                            Procedure to file a complaint on <a href="">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                        </p>
                        <p className="px-2">
                            <a href="">Smart Online Dispute Resolution</a> | <a href="">Grievances Redressal Mechanism</a>
                        </p>
                        <p className="px-2">
                            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                        </p>
                        <p className="px-2">
                            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                        </p>
                        <p className="px-2">
                            India's largest broker based on networth as per NSE. <a href="">NSE broker factsheet</a>
                        </p>
                        <p className="px-2">
                            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}