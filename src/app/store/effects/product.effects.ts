import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mapTo, mergeMap, tap } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import * as actions from '../actions/product.actions';
@Injectable()
export class ProductEffects {

  constructor(private productService: ProductService, private actions$: Actions, private router: Router) { }

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadProducts),
      concatMap(() => this.productService.getAllProducts()),
      map((product) => actions.productsLoaded({ product }))
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.createProduct),
      concatMap((action) => this.productService.createProduct(action.product)),
      tap(() => this.router.navigateByUrl('/item'))
    ),
    { dispatch: false }
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteProduct),
      mergeMap((action) => this.productService.deleteProduct(action.id)
        .pipe(
          map(() => actions.deleteProductSuccess({ id: action.id })),
          catchError(() => of(actions.deleteProductSuccess({ id: action.id })))
        )
      ),
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateProduct),
      mergeMap((action) =>
        this.productService.updateProduct(
          action.product.id,
          action.product.changes)
        ),
        tap(() => this.router.navigate(["/item"]))
      ),
    {dispatch: false}
  );

}
