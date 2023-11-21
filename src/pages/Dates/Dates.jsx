import "./Dates.css";

export default function Dates({ isSmallScreen }) {
  return (
    <div className="Dates animate__animated animate__fadeInUp">
        <div className="cities">
          <div className="chi">
            <h1>Chicago</h1>
            <div className="booking-container">
              <a
                href="https://aeh-booking.square.site/"
                className="booking-link"
                target="_blank"
                rel="noreferrer"
              >
                Book With Alex<i className="fa-solid fa-chevron-right"></i>
              </a>
              <a
                href="https://kp-hair-color---chicago.square.site/s/appointments"
                className="booking-link"
                target="_blank"
                rel="noreferrer"
              >
                Book With Kristen
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
            <div className="dates">
              <li>February 3 + 4</li>
              <li>May 11 + 12</li>
              <li>August 10 + 11</li>
              <li>November 9 + 10</li>
            </div>
            <div className="salon">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11881.804559456164!2d-87.6557881!3d41.8831539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cd8ffb2a28d%3A0xd97919872e4abb89!2sSOLO%20SALON%20WASHINGTON!5e0!3m2!1sen!2sus!4v1688501266471!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
    </div>
  );
}
