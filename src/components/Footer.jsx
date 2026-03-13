import Information from "./Information";
import ico1 from "../assets/facebook.svg";
import ico2 from "../assets/instagram.svg";
import ico3 from "../assets/twitter.svg";
import Logo from "../components/Logo";

const Footer = () => {

  const items = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Política de Privacidade", link: "/privacy-policy" }
  ];

  const categories = [
    { text: "Roupas", link: "/categories/clothing" },
    { text: "Acessórios", link: "/categories/accessories" },
    { text: "Calçados", link: "/categories/shoes" }
  ];

  const support = [
    { text: "Contato", link: "/contact" },
    { text: "FAQ", link: "/faq" }
  ];

  return (
    <footer className="footer">

      <div className="footer__container">

        <section className="footer__brand">

          <Logo cordalogo={"footer"} />

          <p className="footer__description">
            A Digital Store é sua loja online de confiança, oferecendo produtos
            de qualidade com praticidade, segurança e os melhores preços.
          </p>

          <div className="footer__social">

            <a
              href="https://www.facebook.com/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img src={ico1} alt="icone facebook" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img src={ico2} alt="icone instagram" />
            </a>

            <a
              href="https://pt.wikipedia.org/wiki/Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img src={ico3} alt="icone twitter" />
            </a>

          </div>

        </section>

        <section className="footer__links">

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

      <div className="footer__bottom">

        <hr className="footer__divider" />

        <p className="footer__copyright">
          © {new Date().getFullYear()} Digital Store
        </p>

      </div>

    </footer>
  );
};

export default Footer;