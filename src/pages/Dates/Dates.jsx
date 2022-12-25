import './Dates.css';

export default function Dates() {
    return (
        <div className="Dates">
            <div className="cities">
            <div className="chi">
                    <h1>Chicago</h1>
                    <a href="https://kpxaeh.as.me/chi" target="_blank" rel="noreferrer">Booking Link</a>
                    <div className="dates">
                        <li>February 18 + 19</li>
                        <li>May 20 + 21</li>
                        <li>August 19 + 20</li>
                        <li>November 11 + 12</li>
                    </div>
                    <div className="salon">
                        <h6>Solo Salon</h6>
                        <li>1134 W Washington Blvd</li>
                        <li>Chicago, IL 60607</li>
                    </div>
                    <hr />
                </div>
                <div className="sf">
                    <h1>San Francisco</h1>
                    <a href="https://kpxaeh.as.me/sf" target="_blank" rel="noreferrer">Booking Link</a>
                    <div className="dates">
                        <li>March 5</li>
                        <li>June 11</li>
                        <li>September 10</li>
                        <li>December 10</li>
                    </div>
                    <div className="salon">
                        <h6>Oro Salon</h6>
                        <li>435A Duboce Ave</li>
                        <li>San Francisco, CA 94117</li>
                    </div>
                <hr />
                </div>
                <div className="ny">
                    <h1>New York</h1>
                    <a href="https://kpxaeh.as.me/ny" target="_blank" rel="noreferrer">Booking Link</a>
                    <div className="dates">
                        <li>April 16</li>
                        <li>July 16</li>
                        <li>October 15</li>
                        <li>&nbsp;</li>
                    </div>
                    <div className="salon">
                        <h6>Maria Bonita Salon</h6>
                        <li>199 Mott St</li>
                        <li>New York, NY 10012</li>
                    </div>
                    <hr />
                    <br />
                </div>
            </div>
        </div>
    );
}