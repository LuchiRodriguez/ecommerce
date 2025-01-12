import { useState, useEffect } from "react";
import { ShoppingCartContext } from "../ShoppingCartContext";
import PropTypes from "prop-types";

export const ShoppingCartProvider = ({ children }) => {
  //Shopping Cart - Increment quantity
  const [count, setCount] = useState(0);

  //Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  useEffect(() => {
    if (isCheckoutSideMenuOpen) {
      closeProductDetail();
    } else if (isProductDetailOpen) {
      closeCheckoutSideMenu();
    }
  }, [isCheckoutSideMenuOpen, isProductDetailOpen]);

  //Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});

  //Shopping Cart - Products added to cart
  const [cartProducts, setCartProducts] = useState([]);

  //Shopping Cart - Order
  const [order, setOrder] = useState([]);

  //Get products
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  //Get products by title
  const [title, setTitle] = useState(null);

  //Get products by category
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProductsByTitle = (products, title) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(title.toLowerCase())
    );
  };

  const filteredProductsByCategory = (products, category) => {
    return products?.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );
  };

  const filterBy = (searchType, items, title, category) => {
    if (searchType === "BY_TITLE") {
      return filteredProductsByTitle(items, title);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredProductsByCategory(items, category);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredProductsByCategory(items, category).filter((item) =>
        item.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (title && category)
      setFilteredProducts(
        filterBy("BY_TITLE_AND_CATEGORY", products, title, category)
      );
    if (title && !category)
      setFilteredProducts(filterBy("BY_TITLE", products, title, category));
    if (!title && category)
      setFilteredProducts(filterBy("BY_CATEGORY", products, title, category));
    if (!title && !category)
      setFilteredProducts(filterBy(null, products, title, category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, title, category]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        products,
        setProducts,
        filteredProducts,
        filteredProductsByCategory,
        filteredProductsByTitle,
        setFilteredProducts,
        title,
        setTitle,
        category,
        setCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node,
};
