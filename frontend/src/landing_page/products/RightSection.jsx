export default function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {

    return (
        <>
            <div className="container p-5" style={{marginTop: "-11rem", marginBottom: "-10rem"}}>
                <div className="row p-5 d-flex flex-wrap">
                    <div className="col-4 p-3 d-flex flex-column justify-content-center">
                        <h1 className="fs-3 mb-4">{productName}</h1>
                        <p style={{fontSize: "1.1rem", lineHeight: "2rem"}}>
                            {productDescription}
                        </p>

                        <div className="d-flex flex-wrap">
                            <a href={learnMore} style={{ marginLeft: "5rem", textDecoration: "none" }}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                        </div>

                    </div>

                    <div className="col-1"></div>

                    <div className="col-7 p-5">
                        <img src={imageURL} className="img-fluid" alt={productName} />
                    </div>
                </div>
            </div>
        </>
    );
}