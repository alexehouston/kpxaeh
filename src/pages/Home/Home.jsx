import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
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
  );
}
