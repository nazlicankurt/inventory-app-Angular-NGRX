import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { State, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { AppState } from 'src/app/store';
import * as actions from '../../store/actions/product.actions';
import * as fromReducer from '../../store/selectors/product.selectors';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {

  searchKey: string;
  constructor(proService: ProductService, store : Store) {}


  displayedColumns: string[] = [
    'status',
    'id',
    'stockCode',
    'name',
    'amount',
    'lastUpdatedAt',
    'actions',
  ];
  dataSource = new MatTableDataSource<Product>();
  selection = new SelectionModel<Product>(true, []);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {
    this.store.dispatch(actions.loadProducts());
    this.store.select(fromReducer.getAllProducts).subscribe((products) =>
     (this.dataSource.data = products));

  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  deletePro(id: string) {
    this.store.dispatch(actions.deleteProduct({id}));

    }
    applyFilter() {
      this.dataSource.filter = this.searchKey.trim().toLowerCase();
    }


}


