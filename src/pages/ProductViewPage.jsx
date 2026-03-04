import BuyBox from "../components/BuyBox";
import Gallery from "../components/Gallery";
import Section from "../components/Section"
import ProductListing from "../components/ProductListing"

const ProductViewPage = () => {

    const listing = [
        { "src": "/produc-image-1.jpeg" },
        { "src": "/produc-image-2.jpeg" },
        { "src": "/produc-image-3.jpeg" },
        { "src": "/produc-image-4.jpeg" },
        { "src": "/produc-image-5.jpeg" }

    ]

    const link = [{
        "text": "Ver todos",
        "href": "/products"
    }]
    return (
        <>

            <div className="flex mb-6">
                <section>
                    <Gallery
                        images={listing}
                        width="700px"
                        height="570px"
                        radius="4px"
                        className="container"

                    />
                </section>
                <div className="flex flex-column justify-content-start gap-4">
                    <BuyBox
                        className="flex gap-2"
                        name="Tênis Nike Air Max 270"
                        reference="NK-AM270-001"
                        stars={4.8}
                        rating="327 avaliações"
                        price={899.90}
                        priceDiscount={749.90}
                        description="Tênis caom tecnologia Air para máximo conforto e amortecimento."
                    >
                    </BuyBox>
                </div>
            </div>
            <div>
                <Section
                    title={"Produtos recomendados"}
                    titleAlign={"left"}
                    link={link}
                >
                    <ProductListing
                        products={
                            [
                                {
                                    name: "Nome do produto 1",
                                    image: "/produc-image-1.jpeg",
                                    price: 200,
                                    discountedPrice: 149.9
                                },
                                {
                                    name: "Nome do produto 2",
                                    image: "/produc-image-2.jpeg",
                                    price: 49.9
                                },
                                {
                                    name: "Nome do produto 2",
                                    image: "/produc-image-3.jpeg",
                                    price: 49.9
                                },
                                {
                                    name: "Nome do produto 2",
                                    image: "/produc-image-4.jpeg",
                                    price: 49.9
                                }
                            ]
                        }
                    />
                </Section>
            </div>
        </>
    );
}

export default ProductViewPage;