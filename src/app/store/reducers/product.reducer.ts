import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import * as actions from '../actions/product.actions';

export const featureKey = 'personListState';

export interface ProductState extends EntityState<Product> {
  ProductsLoaded: boolean;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState = adapter.getInitialState({
  ProductsLoaded: false
});

export const ProductReducer = createReducer(
  initialState,

  on(actions.productsLoaded, (state, action) => {
    return adapter.setAll(
      action.product,
      { ...state, ProductsLoaded: true }
    );
  }),

  on(actions.createProduct, (state, action) => {
    return adapter.addOne(action.product, state);
  }),

  on(actions.deleteProductSuccess, (state, action) => {
    return adapter.removeOne(action.id, state);
  }),

  on(actions.updateProduct, (state, action) => {
    return adapter.updateOne(action.product, state);
  })

);


export const { selectAll, selectIds } = adapter.getSelectors();
