import './Contact.css';

export default function Contact() {
    return (
        <div className="Contact">
            <div className="Kristen">
                <h3>Contact Kristen</h3>
                <div className="contact-info">
                    <a href = "mailto:kristen@kphaircolor.com?subject = KP Hair Color Booking&body = Message"><i class="fa-solid fa-envelope"></i></a>
                    <a href="https://www.instagram.com/kphaircolor/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                    <a href="tel:708 351-7087"><i class="fa-solid fa-phone"></i></a>
                </div>
            </div>
            <div className="Alex">
                <h3>Contact Alex</h3>
                <div className="contact-info">
                    <a href = "mailto:alex@alexehouston.com?subject = Alex E. Houston Hair Booking&body = Message"><i class="fa-solid fa-envelope"></i></a>
                    <a href="https://www.instagram.com/byalexehouston/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div className="Lexi">
                <h3>Follow Lexi</h3>
                <div className="contact-info">
                <a href="https://www.instagram.com/lexiluslooks/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
}