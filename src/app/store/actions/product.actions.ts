import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';


export const loadProducts = createAction(
  '[Products List] Load Products via Service',
);

export const ProductsLoaded = createAction(
  '[Products Effect] Products Loaded Successfully',
  props<{product: Product[]}>()
);

export const createProduct = createAction(
  '[Create Product Component] Create Product',
  props<{product: Product}>()
);

export const deleteProduct = createAction(
  '[Products List Operations] Delete Product',
  props<{id: number}>()
);

export const updateProduct = createAction(
  '[Products List Operations] Update Product',
  props<{id :number, update: Product}>()
);

export const ProductActionTypes = {
  loadProducts,
  ProductsLoaded,
  createProduct,
  deleteProduct,
  updateProduct
};
