import { createContext } from 'react';

const searchContext = createContext();

export default searchContext;

export const backendurl = 'https://dummyjson.com'

export const productUrl = {
    getProducts: "/products",
    getCategories: "/products/categories",
    searchBycategory: "/products/category/",
    searchByProduct: "/products/search/?q="

}