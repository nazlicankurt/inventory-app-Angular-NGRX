import { ActionReducerMap } from '@ngrx/store';
import * as fromProduct from './reducers/product.reducer';

export interface AppState {
  productState: fromProduct.ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  productState: fromProduct.ProductReducer
};
