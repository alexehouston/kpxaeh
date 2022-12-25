import './Nav.css';

export default function Nav({ currentPage, setCurrentPage }) {

    function renderHome() {
        setCurrentPage('home');
    }

    function renderDates() {
        setCurrentPage('dates');
    }

    function renderContact() {
        setCurrentPage('contact');
    }

    return (
        <div className="Nav">
            <h1 onClick={renderHome} className="Logo">KP x AEH</h1>
            <ul className="Links">
                <li><a href="https://kpxaeh.as.me/schedule.php" target="_blank" rel="noreferrer">Booking</a></li>
                <li onClick={renderDates}>Travel Dates</li>
                <li onClick={renderContact}>Contact</li>
            </ul>
        </div>
    );
}