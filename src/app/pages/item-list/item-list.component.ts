import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import * as actions from '../../store/actions/product.actions';
import * as fromReducer from '../../store/selectors/product.selectors';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {

  products$: Observable<Product[]>;
  filterTerm: string;

  constructor(
    private store: Store) { }


  ngOnInit(): void {
  this.store.dispatch(actions.loadProducts());
    this.products$ = this.store.select(fromReducer.getAllProducts);
  }

  deletePro(id: string) {
  this.store.dispatch(actions.deleteProduct({id}));

  }

}



