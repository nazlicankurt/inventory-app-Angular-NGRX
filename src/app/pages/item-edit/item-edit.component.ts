import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import * as actions from '../../store/actions/product.actions';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss'],
})
export class ItemEditComponent implements OnInit {
  productForm: FormGroup;
  id!: string;
  isAddMode = false;
  minDate: Date;
  maxDate: Date;
  minDate1: Date;
  constructor(
    formBuilder: FormBuilder,
    productService: ProductService,
    route: ActivatedRoute,
    store : Store
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date();
    this.minDate1 = new Date();
    this.productForm = this.formBuilder.group({
      stockCode: ['', [Validators.required, Validators.minLength(4),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
      name: ['', [Validators.required, Validators.minLength(4),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
      createdAt: ['', [Validators.required]],
      lastUpdatedAt: ['', [Validators.required]],
      amount: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.max(1000),
        ],
      ],
    });
  }


  ngOnInit(): void {
    this.getProductsById(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
  }

  getProductsById(id: string) {
    this.productService.getById(id).subscribe((data) => {
      this.id = data.id;
      this.productForm.setValue({
        stockCode: data.stockCode,
        name: data.name,
        createdAt: data.createdAt,
        lastUpdatedAt: data.lastUpdatedAt,
        amount: data.amount,
      });
    });
  }

  onSubmit() {

  const update : Update<Product> = {
    id: this.id,
    changes: this.productForm.value
  };
  this.store.dispatch(actions.updateProduct({product : update}))

  }
}
