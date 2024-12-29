import infoCard from "../../constants/data.js";
import {Arrow} from "../../assets/index.js"
import './MainPage.css'

const MainPage = () => {
    return (
        <section className="page">
            {infoCard.map((info) => (
                <div key={info.id}
                     className="wrapper">
                    <img
                        src={info.img.src}
                        alt={info.img.alt}
                        width={126}
                        height={168}/>

                    <div className="card-container">

                        <div className="country-heading">
                            <img
                                src={Arrow}
                                alt="Location"
                                width={9}
                                height={9.55}
                            />
                            <h4>{info.country}</h4>
                            <a
                                href={info.googleMapsLink} target="_blank">
                                View on Google Maps
                            </a>
                        </div>

                        <h1>{info.title}</h1>

                        <p className="date">{info.dates}</p>

                        <p>{info.text}</p>

                    </div>

                </div>
            ))}
        </section>
    )
}
export default MainPage
