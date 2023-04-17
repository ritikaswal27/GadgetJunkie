import React from 'react';
import styled from 'styled-components';
import { Filters, ProductList, Sort, PageHero } from '../components';
import { useProductsContext } from '../context/products_context';

const ProductsPage = () => {
  const data = useProductsContext();
  if (data.products_loading) {
    return <h1> loading...</h1>;
  }
  if (data.products_error) {
    return <h1> error</h1>;
  }

  return (
    <h4>products page</h4>
    // {data.products.map((product) =>{
    //   return (
    //     <
    //   )
    // })}
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
