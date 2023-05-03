import React from 'react';
import styled from 'styled-components';
import { Filters, ProductList, Sort, PageHero } from '../components';
// import { useProductsContext } from '../context/products_context';

const ProductsPage = () => {
  // const data = useProductsContext();
  // if (data.products_loading) {
  //   return <h1> loading...</h1>;
  // }
  // if (data.products_error) {
  //   return <h1> error</h1>;
  // }

  return (
    <main>
      <PageHero title='products' />
      <Wrapper className='page'>
        <div className='section-center products'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
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

// products

// filter

// categories and companies store
