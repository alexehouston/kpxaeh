import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import "./Dates.css";

export default function Dates({ isSmallScreen }) {
  return (
    <div className="Dates animate__animated animate__fadeInUp">
      {isSmallScreen ? (
        <div className="accordion-container">
          <Accordion>
            <AccordionItem
              initialEntered
              header={
                <>
                  Chicago{" "}
                  <i className="fa-solid fa-chevron-down chevron-down"></i>
                </>
              }
            >
              <div className="city">
                <div className="col-1">
                  <div className="dates">
                    <li>November 11 + 12</li>
                  </div>
                </div>
                <div className="col-2">
                  <a
                    href="https://kpxaeh.as.me/chicago"
                    className="booking-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Booking Link<i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11881.804559456164!2d-87.6557881!3d41.8831539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cd8ffb2a28d%3A0xd97919872e4abb89!2sSOLO%20SALON%20WASHINGTON!5e0!3m2!1sen!2sus!4v1688501266471!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </AccordionItem>
            <AccordionItem
              header={
                <>
                  San Francisco{" "}
                  <i className="fa-solid fa-chevron-down chevron-down"></i>
                </>
              }
            >
              <div className="city">
                <div className="col-1">
                  <div className="dates">
                    <li>December 10</li>
                  </div>
                </div>
                <div className="col-2">
                  <a
                    href="https://kpxaeh.as.me/sanfrancisco"
                    className="booking-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Booking Link<i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201879.8559738162!2d-122.60206751684781!3d37.757857184595565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1688503507576!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </AccordionItem>
            <AccordionItem
              header={
                <>
                  New York{" "}
                  <i className="fa-solid fa-chevron-down chevron-down"></i>
                </>
              }
            >
              <div className="city">
                <div className="col-1">
                  <div className="dates">
                    <li className="nxtyr">2024</li>
                  </div>
                </div>
                <div className="col-2">
                  <a
                    href="https://kpxaeh.as.me/newyork"
                    className="booking-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Booking Link<i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12095.410081019756!2d-73.995793!3d40.721263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25985e52603cf%3A0x7d9c3d0804b3cc3e!2sMaria%20Bonita%20Salon%20%26%20Spa!5e0!3m2!1sen!2sus!4v1688503430556!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </AccordionItem>
          </Accordion>
        </div>
      ) : (
        <div className="cities">
          <div className="chi">
            <h1>Chicago</h1>
            <div className="booking-container">
              <a
                href="https://kpxaeh.as.me/chicago"
                className="booking-link"
                target="_blank"
                rel="noreferrer"
              >
                Booking Link<i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
            <div className="dates">
              <li>November 11 + 12</li>
              <br />
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
          <div className="sf">
            <h1>San Francisco</h1>
            <div className="booking-container">
              <a
                href="https://kpxaeh.as.me/sanfrancisco"
                className="booking-link"
                target="_blank"
                rel="noreferrer"
              >
                Booking Link<i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
            <div className="dates">
              <li>December 10</li>
              <br />
            </div>
            <div className="salon">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201879.8559738162!2d-122.60206751684781!3d37.757857184595565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1688503507576!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="ny">
            <h1>New York</h1>
            <div className="booking-container">
              <a
                href="https://kpxaeh.as.me/newyork"
                className="booking-link"
                target="_blank"
                rel="noreferrer"
              >
                Booking Link<i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
            <div className="dates">
              <li className="nxtyr">2024</li>
              <br />
            </div>
            <div className="salon">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12095.410081019756!2d-73.995793!3d40.721263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25985e52603cf%3A0x7d9c3d0804b3cc3e!2sMaria%20Bonita%20Salon%20%26%20Spa!5e0!3m2!1sen!2sus!4v1688503430556!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <br />
          </div>
        </div>
      )}
    </div>
  );
}
