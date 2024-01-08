import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({ brand, mode, toggleMode }) => {
    return (
        <nav id="mainNavbar" className={`navbar sticky-top bg-${mode === 'dark' ? 'dark' : 'primary'} navbar-expand-md`} data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="#" className="navbar-brand">{brand.toUpperCase()}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            {/* <a href="/" className="nav-link">HOME</a> */}
                            <Link to="/" className="nav-link">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">CONTACT</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch nav-item text-${mode === 'light' ? 'secondary-emphasis' : 'light'}`}>
                        <input className="form-check-input text-light" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;