export default function NotFound() {

    return (
        <>
            <div className="container mb-5 p-5" style={{marginTop: "-5rem"}}>
                <div className="row text-center p-5">
                
                    <h1 className="mt-5 fs-2">404 Not Found</h1>

                    <p className="fs-5 mb-5">Sorry, the page you are looking for does not exist.</p>

                    <button className="p-2 btn fs-5" style={{width: "27%", margin: "0 auto", backgroundColor: "#387ed1", color: "white", borderRadius: "3px"}}>Go Home</button>
                </div>
            </div>
        </>
    );
}