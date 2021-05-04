import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss'],
})
export class ItemEditComponent implements OnInit {
  productForm: FormGroup;
  id!: string;
  isAddMode: boolean = false;
  minDate: Date;
  maxDate: Date;
  minDate1: Date;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date();
    this.minDate1 = new Date();
    this.productForm = this.formBuilder.group({
      stockCode: ['PR-', [Validators.required, Validators.minLength(4)]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      createdAt: ['', [Validators.required]],
      lastUpdatedAt: [null],
      amount: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(3),
        ]),
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
    this.productService
      .updateProduct(this.id, this.productForm.value)
      .pipe()
      .subscribe(() => {
        this.router.navigate(['/item'], { relativeTo: this.route });
      });
  }
}
