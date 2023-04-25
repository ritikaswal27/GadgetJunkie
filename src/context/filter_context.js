import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  // filter: 'all',
  // search: '',
  // searched_products: [],
  // company: 'all',
  filterParam: {
    category: 'all',
    company: 'all',
    search: '',
    color: 'all',
    price: '309999',
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const updateFilter = (e) => {
    const name = e.target.name;
    let value;
    if (name === 'category') {
      value = e.target.textContent;
    } else if (name === 'shipping') {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  // const filterProducts = (e) => {
  //   const value = e.target.textContent;
  //   dispatch({ type: FILTER_PRODUCTS, payload: value });
  // };

  // useEffect(() => {
  //   dispatch({ type: FILTER_PRODUCTS });
  // }, [products, state.filter]);
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [products, state.filterParam]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filterParam]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  // const updateCompany = (e) => {
  //   const value = e.target.value;
  //   dispatch;
  // };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        // filterProducts,
        updateFilter,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
