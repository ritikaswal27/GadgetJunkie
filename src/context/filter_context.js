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
  grid_view: false,
  sort: 'price-lowest',
  filter: 'all',
  search: '',
  searched_products: [],
  all_filtered_products: [],
  company: 'all',
  // filterParam: [{ filter: 'all' }, { company: 'all' }],
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const updateFilter = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_FILTERS, payload: value });
  };
  const filterProducts = (e) => {
    const value = e.target.textContent;
    dispatch({ type: FILTER_PRODUCTS, payload: value });
  };

  // useEffect(() => {
  //   dispatch({ type: FILTER_PRODUCTS });
  // }, [products, state.filter]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filter]);

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

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        filterProducts,
        updateFilter,
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
