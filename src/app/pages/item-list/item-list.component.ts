import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
product: Product[]=[];

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {

    this.productService.getAllProducts().pipe().subscribe(data =>{
      this.product =data;
    })

  }

deletePro(id:string){
  this.productService.deleteProduct(id)
  .subscribe((res)=>{
    this.router.navigate(['/item-list']);
  }, err =>{
    console.log(err);

  });
}
}



