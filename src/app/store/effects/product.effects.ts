import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductActionTypes, updateProduct } from '../actions/product.actions';

@Injectable()
export class productEffects {

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActionTypes.loadProducts),
      concatMap(() => this.productService.getAllProducts()),
      map((product) => ProductActionTypes.ProductsLoaded({product}))
    )
  );
  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActionTypes.createProduct),
      concatMap((action) => this.productService.createProduct(action.product)),
      tap(() => this.router.navigateByUrl('/products'))
    ),
    {dispatch: false}
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActionTypes.deleteProduct),
      concatMap((action) => this.productService.deleteProduct(action.id))
    ),
    {dispatch: false}
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActionTypes.updateProduct),
      concatMap((action) => this.productService.updateProduct(action.update))
    ),
    {dispatch: false}
  );

  constructor(private productService: ProductService, private actions$: Actions, private router: Router) {}
}
