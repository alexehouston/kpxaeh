import './Dates.css';

export default function Dates() {
    return (
        <div className="Dates">
            <div className="cities">
            <div className="chi">
                    <h1>Chicago</h1>
                    <a href="https://kpxaeh.as.me/chi" className="booking-link" target="_blank" rel="noreferrer">Booking Link</a>
                    <div className="dates">
                        <li>May 20 + 21</li>
                        <li>August 19 + 20</li>
                        <li>November 11 + 12</li>
                    </div>
                    <div className="salon">
                    <a href="https://www.solo-salon.com/" target="_blank" rel="noreferrer"><h6>Solo Salon</h6></a>
                    <a href="https://www.google.com/maps/place/SOLO+SALON+WASHINGTON/@41.8831539,-87.6557881,15z/data=!4m2!3m1!1s0x0:0xd97919872e4abb89?sa=X&ved=2ahUKEwi-04anmZ78AhWKkmoFHc8kDfkQ_BJ6BAh3EAg" target="_blank" rel="noreferrer">
                        <li>1134 W Washington Blvd</li>
                        <li>Chicago, IL 60607</li>
                    </a>
                    </div>
                    <hr />
                </div>
                <div className="sf">
                    <h1>San Francisco</h1>
                    <a href="https://kpxaeh.as.me/sf" className="booking-link" target="_blank" rel="noreferrer">Booking Link</a>
                    <div className="dates">
                        <li>June 11</li>
                        <li>September 10</li>
                        <li>December 10</li>
                    </div>
                    <div className="salon">
                    <a href="https://www.orosalonsf.com/" target="_blank" rel="noreferrer"><h6>Oro Salon</h6></a>
                    <a href="https://www.google.com/maps/place/ORO+Duboce/@37.769165,-122.429861,15z/data=!4m5!3m4!1s0x0:0x6e94fd4e7266cf39!8m2!3d37.769165!4d-122.429861" target="_blank" rel="noreferrer">
                        <li>TBA</li>
                        <li>&nbsp;</li>
                        </a>
                    </div>
                <hr />
                </div>
                <div className="ny">
                    <h1>New York</h1>
                    <a href="https://kpxaeh.as.me/ny" className="booking-link" target="_blank" rel="noreferrer">Booking Link</a>
                    <div className="dates">
                        <li>July 16</li>
                        <li>October 15</li>
                        <li>&nbsp;</li>
                    </div>
                    <div className="salon">
                        <a href="https://www.mariabonitany.com/" target="_blank" rel="noreferrer"><h6>Maria Bonita Salon</h6></a>
                        <a href="https://www.google.com/maps/place/Maria+Bonita+Salon+%26+Spa/@40.721263,-73.995793,15z/data=!4m5!3m4!1s0x0:0x7d9c3d0804b3cc3e!8m2!3d40.721263!4d-73.995793" target="_blank" rel="noreferrer">
                            <li>199 Mott St</li>
                            <li>New York, NY 10012</li>
                        </a>
                    </div>
                    <hr />
                    <br />
                </div>
            </div>
        </div>
    );
}