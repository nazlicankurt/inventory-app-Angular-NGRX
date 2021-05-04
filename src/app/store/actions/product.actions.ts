import { Action } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';

export enum ProductActionTypes {
  GET_PRODUCT ='[GET PRODUCT]',
  GET_PRODUCT_SUCCESS='[GET_PRODUCT] SUCCESS',
  GET_PRODUCT_FAILURE='[GET_PRODUCT] FAILURE',

  ADD_PRODUCT ='[ADD PRODUCT]',
  ADD_PRODUCT_SUCCESS='[ADD_PRODUCT] SUCCESS',
  ADD_PRODUCT_FAILURE='[ADD_PRODUCT] FAILURE',

  UPDATE_PRODUCT ='[UPDATE PRODUCT]',
  UPDATE_PRODUCT_SUCCESS='[UPDATE_PRODUCT] SUCCESS',
  UPDATE_PRODUCT_FAILURE='[UPDATE_PRODUCT] FAILURE',

  DELETE_PRODUCT ='[DELETE PRODUCT]',
  DELETE_PRODUCT_SUCCESS='[DELETE_PRODUCT] SUCCESS',
  DELETE_PRODUCT_FAILURE='[DELETE_PRODUCT] FAILURE',

};
export class GetProducts implements Action{

  readonly type = ProductActionTypes.GET_PRODUCT;
}
export class GetProductsSuccess implements Action {
  readonly type = ProductActionTypes.GET_PRODUCT_SUCCESS;
  constructor(
    public payload: {
      products: Product[];
    }
  ) {}
}
export class GetProductsFailure implements Action {
  readonly type = ProductActionTypes.GET_PRODUCT_FAILURE;
}

export class AddProduct implements Action {
  readonly type = ProductActionTypes.ADD_PRODUCT;
  constructor(
    public payload: {
      product: Product;
    }
  ) {}
}
export class AddProductsSuccess implements Action {
  readonly type = ProductActionTypes.ADD_PRODUCT_SUCCESS;
}
export class AddProductsFailure implements Action {
  readonly type = ProductActionTypes.ADD_PRODUCT_FAILURE;
}

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCT;
  constructor(
    public payload: {
      product: Product;
    }
  ) {}
}
export class UpdateProductsSuccess implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCT_SUCCESS;
}
export class UpdateProductsFailure implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCT_FAILURE;
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT;
  constructor(
    public payload: {
      id: string;
    }
  ) {}
}
export class DeleteProductsSuccess implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT_SUCCESS;
}
export class DeleteProductsFailure implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT_FAILURE;
}

export type ProductActions =
  | AddProduct
  | AddProductsSuccess
  | AddProductsFailure
  | GetProducts
  | GetProductsSuccess
  | GetProductsFailure
  | UpdateProduct
  | UpdateProductsSuccess
  | UpdateProductsFailure
  | DeleteProduct
  | DeleteProductsSuccess
  | DeleteProductsFailure;


