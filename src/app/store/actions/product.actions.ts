import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';

export const loadProducts = createAction('[Products List] Load Products via Service');
export const productsLoaded = createAction('[Products Effect] Products Loaded Successfully', props<{ product: Product[] }>());
export const createProduct = createAction('[Create Product Component] Create Product', props<{ product: Product }>());
export const deleteProduct = createAction('[Products List Operations] Delete Product', props<{ id: string }>());
export const deleteProductSuccess = createAction('[Products List Operations] Delete Product Success', props<{ id: string }>());
export const updateProduct = createAction('[Products List Operations] Update Product', props<{ product: Update<Product> }>());
 export const updateProductSuccess = createAction('[Product Effect] Update Product Success', props<{ product: Product }>());
export const updateProductFailure = createAction('[Product Effect] Update Product failure',props<{ error: any }>());
