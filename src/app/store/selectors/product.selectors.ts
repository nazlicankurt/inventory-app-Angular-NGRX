
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectAll } from '../reducers/product.reducer';

const appState = createFeatureSelector<AppState>('appState');
export const productFeatureSelector = createSelector(appState, (state) => state.productState);

export const getAllProducts = createSelector(
  productFeatureSelector,
  selectAll
);

export const productsLoaded = createSelector(
  productFeatureSelector,
  state => state.ProductsLoaded
);
