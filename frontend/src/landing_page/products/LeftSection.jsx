export default function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <>
            <div className="container p-5">
                <div className="row p-5 d-flex flex-wrap">
                    <div className="col-7 p-5">
                        <img src={imageURL} className="img-fluid" alt={productName} />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4  p-3 d-flex flex-column justify-content-center">
                        <h1 className="fs-3 mb-4">{productName}</h1>
                        <p style={{fontSize: "1.1rem", lineHeight: "2rem"}}>
                            {productDescription}
                        </p>

                        <div className="d-flex flex-wrap">
                            <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>

                            <a href={learnMore} style={{ marginLeft: "5rem", textDecoration: "none" }}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                        </div>

                        <div className="d-flex flex-wrap mt-4">
                            <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="googlePlayBadge" /></a>
                            <a href={appStore}><img src="media/images/appstoreBadge.svg" style={{marginLeft: "1rem"}} alt="appstoreBadge" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}