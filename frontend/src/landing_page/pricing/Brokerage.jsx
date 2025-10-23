export default function Brokerage() {

    return (
        <>
            <div className="container p-5 border-top">
                <div className="row mt-5">
                    <div className="col-8">
                        <a href="" style={{textDecoration: "none"}}><h3 className="fs-5 text-center">Brokerage calculator</h3></a>

                        <ul style={{lineHeight: "2.5" , fontSize: "0.85rem"}} className="text-muted mt-4">
                            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                            <li>Digital contract notes will be sent via e-mail.</li>
                            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges applyl.</li>
                            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                            <li>For NRI accout (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                            <li>If the account is in debit balance, any order placed wil be changed ₹40 per executed order instead of ₹20 per executed order.</li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <a href="" style={{textDecoration: "none"}}><h3 className="fs-5 text-center">List of charges</h3></a>

                    </div>

                </div>

            </div>
        </>
    );
}