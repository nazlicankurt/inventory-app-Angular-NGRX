import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '@ngrx/store';
import { ProductService } from 'src/app/core/services/product.service';
import { AppState } from 'src/app/store';

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
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private store: State<AppState>
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date();
    this.minDate1 = new Date();
    this.productForm = this.formBuilder.group({
      stockCode: ['', [Validators.required, Validators.minLength(4)]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      createdAt: ['', [Validators.required]],
      lastUpdatedAt: [null],
      amount: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(3),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
  }

  onSubmit() {
    this.productService
      .createProduct(this.productForm.value)
      .pipe()
      .subscribe(() => {
        this.router.navigate(['/item'], { relativeTo: this.route });
        console.log('kdfkjfjhd', this.productForm.value);
      });
  }
}
