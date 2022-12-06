import Composition from "../functional/Composition";


function MainSection() {
    return (
        <section className="main">
            <div className="main__container container">
                <div className="main__srlabel">
                    <img src="/img/Street-Ride.svg" alt="StreetRide" />
                </div>
                <Composition />
            </div>
        </section>
    )
}

export default MainSection;