import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import * as actions from '../../store/actions/product.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  productForm: FormGroup;
  id!: string;
  isAddMode: boolean = false;
  minDate: Date;
  minDate1: Date;
  maxDate: Date;
  constructor(
    formBuilder: FormBuilder,
    route: ActivatedRoute,
    store: Store
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date();
    this.minDate1 = new Date();
    this.productForm = this.formBuilder.group({
      stockCode: ['', [Validators.required, this.noWhitespaceValidator, Validators.minLength(4),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
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
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
  }

  onSubmit() {
if(!this.productForm.valid) {
  return;
}
const product : Product = {
id: this.productForm.value.id,
stockCode: this.productForm.value.stockCode,
amount: this.productForm.value.amount,
brand: this.productForm.value.brand,
status: this.productForm.value.status,
name: this.productForm.value.name,
createdAt: this.productForm.value.createdAt,
lastUpdatedAt: this.productForm.value.lastUpdatedAt,
// ...state.
};
this.store.dispatch(actions.createProduct({product}))
    }

    public noWhitespaceValidator(control: FormControl) {
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
  }
  }
