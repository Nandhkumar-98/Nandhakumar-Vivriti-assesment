import React, { useEffect, useState, useContext } from "react";
import { getProductDetails, getCategories, searchBycategory, searchByProduct } from "../services/productService";
import searchContext from "../constant";

function Products() {

    const [productDetails, setProductDetails] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("0");
    const [isPageLoad, setPageLoad] = useState(true);
    const { globalSearch, searchAction } = useContext(searchContext);

    // get categories and initial page load
    useEffect(() => {
        getAllCategories();
        getProducts();
        setPageLoad(false);
    }, [])


    // search by category
    useEffect(() => {

        if(selectedCategory != "0" ){
            categorySearch();
        }else if(!isPageLoad){
            getProducts();
        }

    }, [selectedCategory])

    // search by products
    useEffect(() => {

        if(globalSearch){
            productSearch();
        }else if(!isPageLoad){
            getProducts();
        }

    }, [searchAction])


    async function getProducts() {

        try {
            const productDetails = await getProductDetails();

            if (productDetails?.status == 200) {
                setProductDetails(productDetails?.data?.products);
            }

        } catch (e) {
            console.log(e);
        }

    }

    async function getAllCategories() {

        try {
            const categories = await getCategories();

            if (categories?.status == 200) {
                setCategories(categories?.data);
            }

        } catch (e) {
            console.log(e);
        }
    }

    async function categorySearch() {

        try {
            const categories = await searchBycategory(selectedCategory);

            if (categories?.status == 200) {
                setProductDetails(categories?.data?.products);
            }

        } catch (e) {
            console.log(e);
        }

    }

    async function productSearch() {

        try {

            const product = await searchByProduct(globalSearch);

            if (product?.status == 200) {
                setProductDetails(product?.data?.products);
            }

        } catch (e) {
            console.log(e);
        }
    }



    function bindCategories() {

        try {
            return categories?.map((category, index) => {
                return (
                    <>
                        <option key={index} value={category}>{category}</option>
                    </>
                )

            });

        } catch (e) {
            console.log(e);
        }
    }

    function Rating(rating) {

        const integerPart = Math.floor(rating);
        const fractionalPart = rating - integerPart;

        const filledStars = [];
        const emptyStars = [];

        for (let i = 0; i < integerPart; i++) {
            filledStars.push(<span key={i} className="star">&#9733;</span>);
        }

        if (fractionalPart > 0) {
            filledStars.push(<span key="fractional" className="star" style={{ width: `${fractionalPart * 100}%` }}>&#9733;</span>);
        }

        for (let i = filledStars.length; i < 5; i++) {
            emptyStars.push(<span key={i} className="star">&#9734;</span>);
        }

        return (
            <div className="rating">
                {filledStars}
                {emptyStars}
            </div>
        );
    }


    // binding procuct card details in return part
    function bindProducts() {

        try {

            return productDetails?.map((details, value) => {

                return (<>
                    <div className="card">

                        <div className="like-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="heart-icon">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </div>

                        <div className="image">
                            <img src={details?.thumbnail} alt="Card Image" />
                        </div>
                        <div className="content">
                            <p className="bold arial-font">{details?.title}</p>
                            <p className="segoe-ui description-color" title={details?.description}>Product Description: {(details?.description.length > 42 ? `${details?.description.substring(0, 42)}...` : details?.description)}</p>
                            <span className="bold font-font-size arial-font">${details?.price}</span>
                        </div>
                        {Rating(details?.rating)}
                    </div>

                </>)
            });

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="container">

                <div className="second-container">
                    <div className="heading-margin bold">
                        <span>Lorem lpsum</span>
                    </div>
                    <div className="heading-margin margint15">
                        <span className="grey-color">Slash sale brgins in june. Get up to 80% Discount on all products <span className="bold white-color cursor">Read More</span></span>
                    </div>
                </div>

                <div className="select-container">
                    <select id="mySelect"
                        onChange={(e) => setSelectedCategory(e?.target?.value)}
                    >
                        <option value="0" defaultValue>Select Category</option>
                        {bindCategories()}

                    </select>
                </div>



                <div className="vertical-container">
                    {bindProducts()}

                </div>

                <div className="pagination">
                    <button id="prev" className="page-nav-button">&lt;</button>
                    <button className="page-btn">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">...</button>
                    <button className="page-btn">13</button>
                    <button id="next" className="page-nav-button">&gt;</button>
                </div>


            </div>


        </>
    )
}

export default Products;