import './Nav.css';

export default function Nav({ currentPage, setCurrentPage }) {
    return (
        <div className="Nav">
            <h1 onClick={() => setCurrentPage('home')} className="Logo">KP x AEH</h1>
            <ul className="Links">
                <li><a href="https://kpxaeh.as.me/schedule.php" target="_blank" rel="noreferrer">Booking</a></li>
                <li onClick={() => setCurrentPage('dates')}>Travel Dates</li>
                <li onClick={() => setCurrentPage('contact')}>Contact</li>
            </ul>
        </div>
    );
}