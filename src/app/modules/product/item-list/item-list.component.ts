import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { select, State } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { AppState } from 'src/app/store';
import { ProductActionTypes } from 'src/app/store/actions/product.actions';
import { areProductsLoaded, getAllProducts } from 'src/app/store/selectors/product.selectors';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {

  constructor(private proService: ProductService, private store : State<AppState>) {}


  displayedColumns: string[] = [

    'id',
    'stockCode',
    'name',
    'amount',
    'lastUpdatedAt',
    'actions',
  ];
  dataSource = new MatTableDataSource<Product>();
  selection = new SelectionModel<Product>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  ngOnInit(): void {

    this.proService.getAllProducts().subscribe(data=>
      {
      this.dataSource.data= data;
    })
    // this.store.pipe(select(getAllProducts)).subscribe(products => this.initializeData(products));
    // this.subscription.add(this.store.pipe(select(areProductsLoaded)).subscribe(loading => {
    //   if (loading) {
    //     this.dataSource = new MatTableDataSource(this.noData);
    //   }
    // }));

  }



}
