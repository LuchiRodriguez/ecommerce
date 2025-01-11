import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

const Home = () => {
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    if (context.filteredProducts?.length > 0) {
      return context.filteredProducts?.map((product) => (
        <Card key={product.id} data={product} />
      ));
    } else if (context.title === null && context.category === null) {
      return context.products?.map((product) => (
        <Card key={product.id} data={product} />
      ));
    } else {
      return (
        <h1 className="text-center text-2xl col-span-full mt-6">
          Oops! We couldn`t find what you were looking for.
          <br /> Try a different search term or browse our categories.
        </h1>
      );
    }
  };
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">All products</h1>
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
