
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import { ProductActionTypes, updateProduct } from '../actions/product.actions';

export interface ProductState extends EntityState<Product> {
  ProductsLoaded: boolean;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState = adapter.getInitialState({
  ProductsLoaded: false
});

export const ProductReducer = createReducer(
  initialState,

  on(ProductActionTypes.ProductsLoaded, (state, action) => {
    return adapter.addMany(
      action.product,
      {...state, ProductsLoaded: true}

    );

  }),

  on(ProductActionTypes.createProduct, (state, action) => {
    return adapter.addOne(action.product, state);
  }),

  on(ProductActionTypes.deleteProduct, (state, action) => {
    return adapter.removeOne(action.id, state);
  }),

  on(ProductActionTypes.updateProduct, (state, action) => {
    return adapter.upsertOne(action.update, state);
  })

);


export const { selectAll, selectIds } = adapter.getSelectors();
