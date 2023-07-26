import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact animate__animated animate__fadeInUp">
      <div className="Kristen">
        <img src="/assets/kp.jpg" alt="Kristen" />
        <div className="contact-info">
          <a
            href="https://www.kphaircolor.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-user"></i>{" "}
            <span className="contact-detail">Kristen Pennington</span>
          </a>
          <a href="tel:708 351-7087">
            <i className="fa-solid fa-phone"></i>{" "}
            <span className="contact-detail">(708) 351-7087</span>
          </a>
          <a href="mailto:kristen@kphaircolor.com?subject=KP Hair Color Booking">
            <i className="fa-solid fa-envelope"></i>{" "}
            <span className="contact-detail">kristen@kphaircolor.com</span>
          </a>
          <a
            href="https://www.instagram.com/kphaircolor/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>{" "}
            <span className="contact-detail">@kphaircolor</span>
          </a>
        </div>
      </div>
      <div className="Alex">
        <img src="/assets/aeh.jpg" alt="Kristen" />
        <div className="contact-info">
        <a
            href="https://www.alexehouston.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-user"></i>{" "}
            <span className="contact-detail">Alex E. Houston</span>
          </a>
          <a href="mailto:byalexehouston@gmail.com?subject=Alex E. Houston Hair Booking">
            <i className="fa-solid fa-envelope"></i>{" "}
            <span className="contact-detail">byalexehouston@gmail.com</span>
          </a>
          <a
            href="https://www.instagram.com/byalexehouston/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>{" "}
            <span className="contact-detail">@byalexehouston</span>
          </a>
        </div>
      </div>
    </div>
  );
}
