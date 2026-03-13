import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Cart from "../assets/mini-cart.svg";
import { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


const Header = () => {

    const getNavLinkClass = ({ isActive }) =>
        isActive ? "menu-link active" : "menu-link";

    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const search = () => {
        navigate(`/products?filter=${searchTerm}`);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            search();
        }
    };


    return (
        <>
            <header className="header-container">
                <div className="header">

                    <div>
                        <Logo cordafonte={'header'}/>
                    </div>

                    <div className="header-search">
                        <InputText
                            type="text"
                            placeholder="Pesquisar produtos"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="header-padding"
                        />
                        <Button onClick={search} icon="pi pi-search" iconPos="right" className="header-padding"/>
                    </div>

                    <div className="header-actions">
                        <Link to={"/register"} className="register-link" >Cadastre-se</Link>
                        <Link to={"/login"} className="login-link">
                            <Button label="Entrar" className="header-padding"/>
                        </Link>
                        <img src={Cart} alt="Carrinho de compras" className="img-cart" />
                    </div>

                </div>

                <nav
                    className="nav-menu">
                    <NavLink to={"/"}
                        className={getNavLinkClass}>
                        Home</NavLink>
                    <NavLink to={"/products"}
                        className={getNavLinkClass}>Produtos</NavLink>
                    <NavLink to={"/categories"}
                        className={getNavLinkClass}>Categorias</NavLink>
                    <NavLink to={"/myorders"} className={getNavLinkClass}>Meus Pedidos</NavLink>
                </nav>
            </header>
        </>
    );
}

export default Header;