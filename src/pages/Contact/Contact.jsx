import './Contact.css';

export default function Contact() {
    return (
        <div className="Contact">
            <div className="Alex">
                <h3>Contact Alex</h3>
                <div className="contact-info">
                <a href="https://www.instagram.com/byalexehouston/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <p>alex@alexehouston.com</p>
            </div>
            <div className="Kristen">
                <h3>Contact Kristen</h3>
                <div className="contact-info">
                <a href="https://www.instagram.com/kphaircolor/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <p>kristen@kphaircolor.com</p>
                <p>(708) 351-7087</p>
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