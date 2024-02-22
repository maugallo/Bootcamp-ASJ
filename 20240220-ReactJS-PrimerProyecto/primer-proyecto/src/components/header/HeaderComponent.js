import NavbarComponent from "./NavbarComponent";
import * as Icon from 'react-bootstrap-icons';

function HeaderComponent() {
    return (
        <header className="d-flex flex-wrap align-items-center px-3 justify-content-center justify-content-md-between bg-body-secondary py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
                <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                    <span className="fs-3 fw-bold ">ASJ NEWS</span>
                    <Icon.GlobeAmericas className="ms-3" size={40}/>
                </a>
            </div>
            <NavbarComponent/>
            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-dark me-2">Ingresar</button>
                <button type="button" className="btn btn-dark">Registrarse</button>
            </div>
        </header>
    );
}

export default HeaderComponent;