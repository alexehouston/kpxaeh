import './Contact.css';

export default function Contact() {
    return (
        <div className="Contact">
            <div className="Kristen">
                <h3>Contact <span>Kristen</span></h3>
                <div className="contact-info">
                    <a href="tel:708 351-7087"><i class="fa-solid fa-phone"></i></a>
                    <a href = "mailto:kristen@kphaircolor.com?subject=KP Hair Color Booking"><i class="fa-solid fa-envelope"></i></a>
                    <a href="https://www.instagram.com/kphaircolor/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div className="Alex">
                <h3>Contact <span>Alex</span></h3>
                <div className="contact-info">
                    <a href = "mailto:byalexehouston@gmail.com?subject=Alex E. Houston Hair Booking"><i class="fa-solid fa-envelope"></i></a>
                    <a href="https://www.instagram.com/byalexehouston/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div className="Lexi">
                <h3>Follow <span>Lexi</span></h3>
                <div className="contact-info">
                <a href="https://www.instagram.com/lexiluslooks/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
}