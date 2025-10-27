export default function Hero() {

    return (
        <>
            <div style={{ backgroundColor: "#f6f6f6" }} className="px-5">
                <div style={{ padding: "7vh 6vw 4vh 6vw" }} className="d-flex flex-wrap justify-content-between">
                    <h1 style={{ color: "#424242" }}>Support Portal</h1>
                    <button className="btn" style={{ height: "2%", width: "9%", fontSize: "1rem", fontWeight: "bold", backgroundColor: "#387ed1", color: "white", borderRadius: "3px", padding: "-1rem -1rem" }}>
                        My tickets
                    </button>
                </div>

                <div style={{ padding: "0 6vw 6vh 6vw" }} className="input-group mb-3">
                    <span style={{color: "grey", backgroundColor: "white", borderColor: "white"}} className="input-group-text px-2" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input style={{color: "grey", borderColor: "white"}} type="text" className="form-control py-3" placeholder="Eg: How do I open my account, How do I activate F&O..." aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>
        </>
    );
}