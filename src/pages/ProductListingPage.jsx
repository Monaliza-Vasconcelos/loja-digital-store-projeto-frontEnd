import { MultiSelect } from 'primereact/multiselect';
import { useState } from 'react';
import FilterGroup from '../components/FilterGroup';
import Section from '../components/Section'
import ProductListing from '../components/ProductListing'
import { products } from "../data/product";

const ProductListingPage = () => {

    const [selectedSort, setSelectedSort] = useState(null);

    const sortOptions = [
        { label: 'Preço: Menor preço', value: 'menor_preco' },
        { label: 'Preço: Maior preço', value: 'maior_preco' },
    ];

    function onSortChange(e) {
        setSelectedSort(e.value);
    }

    const filterGroups = [
        {
            title: "Tênis",
            options: [
                { text: "Nike", value: "tenis-nike" },
                { text: "Adidas", value: "tenis-adidas" },
                { text: "Puma", value: "tenis-puma" }
            ]
        },
        {
            title: "Camisas",
            options: [
                { text: "Camisa Polo", value: "camisa-polo" },
                { text: "Camisa Social", value: "camisa-social" },
                { text: "Camiseta Básica", value: "camiseta-basica" }
            ]
        },
        {
            title: "Calças",
            options: [
                { text: "Calça Jeans", value: "calca-jeans" },
                { text: "Calça Moletom", value: "calca-moletom" },
                { text: "Calça Cargo", value: "calca-cargo" }
            ]
        },
        {
            title: "Heatset",
            options: [
                { text: "Estampa Frontal", value: "heatset-frontal" },
                { text: "Estampa Costas", value: "heatset-costas" },
                { text: "Full Print", value: "heatset-fullprint" }
            ]
        }
    ];


    return (
        <>
            <div className='flex'>
                <div className="flex flex-column">
                    <section style={{ width: "308px", height: "60px", color: "var(--dark-gray-2)" }} className="flex flex-column gap-3 m-6">
                        <label htmlFor="Ordenar" style={{ fontSize: "16px" }}>Ordenar por:</label>
                        <MultiSelect
                            value={selectedSort}
                            options={sortOptions}
                            onChange={(e) => onSortChange(e)}
                            optionLabel="label"
                            placeholder="Selecione uma opção"
                            className="w-full padding"
                        />
                    </section>
                    <section style={{ width: "308px", height: "auto" }}>
                        <label
                            htmlFor="Filtrar" style={{ fontSize: "16px", color: "var(--dark-gray-2)" }} className="m-6">
                            Filtrar por:
                        </label>
                        <section>
                            {filterGroups.map((group, index) => (
                                <FilterGroup
                                    key={index}
                                    title={group.title}
                                    options={group.options}
                                    inputType="checkbox"
                                />
                            ))}
                        </section>

                    </section>
                </div>
                <div>
                    <Section text={"Produtos"} textAlign={"left"}>

                    </Section>
                    <ProductListing products={products} />
                </div>

            </div>
        </>
    );
}

export default ProductListingPage;