import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex flex-column min-h-screen mt-5">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </div>

        </>
    );
};

export default Layout;