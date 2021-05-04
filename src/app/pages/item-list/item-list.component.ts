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
product: Product[]=[];

  constructor(private productService: ProductService, private store : State<AppState>) {}


  ngOnInit(): void {

    this.productService.getAllProducts().pipe().subscribe(data =>{
      this.product =data;
    })

  }
//   deletePro(id: string) {
//     const pro = this.product.find(x => x.id === id);
//     pro.isDeleting = true;
//     this.productService.delete(id)
//         .pipe(first())
//         .subscribe(() => this.users = this.users.filter(x => x.id !== id));
// }



}
