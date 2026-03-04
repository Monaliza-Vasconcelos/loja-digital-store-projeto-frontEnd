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
            <header>
                <div className="flex justify-content-between align-items-center px-6 py-3">
                    <div>
                        <Logo />
                    </div>

                    <div className="flex gap-3 align-items-center">
                        <InputText
                            type="text"
                            placeholder="Pesquisar produtos"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="padding"
                            style={{width:"500px"}}
                        />
                        <Button onClick={search} icon="pi pi-search" iconPos="right" className="padding"/>
                    </div>

                    <div className="flex gap-3 align-items-center">
                        <Link to={"/register"} className="text-base" style={{color: "var(--dark-gray-2)"}}>Cadastre-se</Link>
                        <Link to={"/login"} className="w-7rem h-2-5rem border-round text-sm font-bold text-white">
                            <Button label="Entrar" className="padding"/>
                        </Link>
                        <img src={Cart} alt="Carrinho de compras" className="w-2rem h-2rem" />
                    </div>
                </div>
                <nav
                    className="flex gap-5 px-6 py-3">
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