import Information from "./Information"
import logo from "../assets/logo-footer.svg"

const Footer = () => {
    const items = [
        {
            text: "Sobre Drip Store",
            link: "/about"
        },
        {
            text: "Política de Privacidade",
            link: "/privacy-policy"
        }
    ];
    const categories = [
        {
            text: "Roupas",
            link: "/categories/clothing"
        },
        {
            text: "Acessórios",
            link: "/categories/accessories"
        },
        {
            text: "Calçados",
            link: "/categories/shoes"
        }
    ];

    const support = [
        {
            text: "Contato",
            link: "/contact"
        },
        {
            text: "FAQ",
            link: "/faq"
        }
    ];
    return (
        <>
            <footer className="flex flex-column justify-content-center p-6 w-full mt-3" style={{backgroundColor:"var(--dark-gray)"}}>
                <div className="flex flex-row">
                    <section className="w-6 flex flex-column gap-3 align-items-start">
                        <img src={logo} alt="logo-footer"  className="w-4"/>
                        <p className="w-4  cor--light-gray">A Digital Store é sua loja online de confiança, oferecendo produtos de qualidade com praticidade, segurança e os melhores preços.</p>
                        <section className="flex gap-3">
                            <i className="pi pi-home cor--light-gray"></i>
                            <i className="pi pi-envelope cor--light-gray"></i>
                            <i className="pi pi-phone cor--light-gray"></i>
                        </section>
                    </section>
                    <section className="flex w-7 justify-content-between align-items-start gap-3">
                        <Information 
                            title={"Informações"} 
                            information={items}
                        />
                        <Information 
                            title={"Categorias"} 
                            information={categories} 
                        />
                        <Information 
                            title={"Suporte"} 
                            information={support} 
                        />
                    </section>
                </div>
                <section className="w-full mt-4">
                    <hr 
                        className="w-full" 
                        style={{ background: "var(--dark-gray)", height: "2px" }} 
                    />
                    <p className="mt-3 text-center cor--light-gray">
                        © {new Date().getFullYear()} Digital Store
                    </p>
                </section>
            </footer>

        </>
    );
}

export default Footer;
