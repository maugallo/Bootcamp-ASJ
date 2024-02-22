import LiComponent from "./LiComponent";

function NavbarComponent(){
    return (
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <LiComponent titulo= "Inicio" />
            <LiComponent titulo = "Política" />
            <LiComponent titulo = "Deportes" />
            <LiComponent titulo = "Internacional" />
            <LiComponent titulo = "Sobre Nosotros" />
        </ul>
    );
}

export default NavbarComponent;