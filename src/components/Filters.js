import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const {
    // filter,
    // search,
    updateFilter,
    // filterProducts,
    all_products,
    // company,
    // updateCompany,
    filterParam,
    clearFilters,
  } = useFilterContext();

  const { category, company, search, price, color, shipping } = filterParam;
  const categories = [
    'all',
    'office',
    'living room',
    'kitchen',
    'bedroom',
    'dining',
    'kids',
  ];

  let companies = all_products.map((product) => product.company);
  companies = ['all', ...new Set(companies)];

  let colors = all_products.flatMap((product) => {
    return product.colors;
  });
  colors = [...new Set(colors)];

  return (
    <Wrapper>
      <form>
        <input
          type='text'
          name='search'
          className='search-input'
          placeholder='search'
          value={search}
          onChange={updateFilter}
        />
      </form>
      {categories.map((value, index) => {
        return (
          <button
            key={index}
            name='category'
            onClick={updateFilter}
            className={value === category ? 'active' : null}
            // value={category}
          >
            {value}
          </button>
        );
      })}
      <form>
        <h5>company</h5>
        <select
          name='company'
          id='company'
          value={company}
          onChange={updateFilter}
        >
          {/* <option value='all'>all</option> */}
          {companies.map((company, index) => {
            return (
              <option key={index} value={company}>
                {company}
              </option>
            );
          })}
        </select>
      </form>

      <div className='colors'>
        <button
          name='color'
          value='all'
          onClick={updateFilter}
          className={color === 'all' ? 'active' : null}
        >
          all
        </button>
        {colors.map((clr, index) => {
          return (
            <button
              key={index}
              className='color-btn'
              name='color'
              value={clr}
              style={{ backgroundColor: clr }}
              onClick={updateFilter}
              // className={`color-btn ${color === clr ? 'active' : null}`}
            >
              {color === clr && <FaCheck />}
            </button>
          );
        })}
      </div>

      <form>
        <p>{formatPrice(price)}</p>
        <input
          type='range'
          name='price'
          min='0'
          max='309999'
          value={price}
          onChange={updateFilter}
        />
        <br />
        <label htmlFor='shipping'>Free shipping</label>
        <input
          id='shipping'
          type='checkbox'
          name='shipping'
          checked={shipping}
          onChange={updateFilter}
        />
      </form>

      <button className='clear-btn' onClick={clearFilters}>
        clear filters
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
