import { Link } from "react-router-dom";
import './Nav.css';

export default function Nav() {
    return (
        <div className="Nav">
            <Link to="/"><h1 className="Logo"><span>KP</span>&nbsp;<span className="x">x</span>&nbsp;<span>AEH</span></h1></Link>
            <div className="Links">
                <Link to="/dates">Travel Dates</Link>
                <Link to="/work">Work</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}