import './Nav.css';

export default function Nav() {
    return (
        <div className="Nav">
            <a href="/"><h1 className="Logo"><span>KP</span>&nbsp;<span className="x">x</span>&nbsp;<span>AEH</span></h1></a>
            <div className="Links">
                <a href="https://kpxaeh.as.me/schedule.php" target="_blank" rel="noreferrer">Booking</a>
                <a href="/dates">Travel Dates</a>
                <a href="/work">Work</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
}