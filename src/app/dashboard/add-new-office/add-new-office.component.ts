import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {} from '../../shared/validators/validators';
import { countryData } from '../../shared/constants/countries';
import { IDropdown } from 'src/app/shared/interfaces/IDropdown';

@Component({
  selector: 'app-add-new-office',
  templateUrl: './add-new-office.component.html',
  styleUrls: ['../../shared/css/styles.css', './add-new-office.component.css'],
})
export class AddNewOfficeComponent implements OnInit {
  faPlus = faPlus;

  officeForm!: FormGroup;

  isFirstEmp = true;

  employees = [{ id: Date.now() + Math.random(), name: '', role: '' }];

  //dropdown data
  countryDropdown: IDropdown = {
    name: 'country',
    label: 'Country',
    default: 'Select Country',
    options: countryData,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Create the form
    this.officeForm = this.fb.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(13),
        ],
      ],
      address: [''],
      country: [''],
      city: [''],
      state: [''],
      zip: [''],
      // employees: [[{ id: Date.now() + Math.random(), name: '', role: '' }]],
    });

    this.officeForm.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  onClickAddEmployee(): void {
    this.isFirstEmp = false;
    // console.log(employeesArray);
    this.employees.push({
      id: Math.random() + Date.now(),
      name: '',
      role: '',
    });
    // this.employees.push({ id: Math.random() + Date.now(), name: '', role: '' });
  }

  // creating getters for the form controls
  get name(): any {
    return this.officeForm.get('name');
  }

  get id(): any {
    return this.officeForm.get('id');
  }

  get email(): any {
    return this.officeForm.get('email');
  }

  get phone(): any {
    return this.officeForm.get('phone');
  }

  get address(): any {
    return this.officeForm.get('address');
  }

  get country(): any {
    return this.officeForm.get('country');
  }

  get city(): any {
    return this.officeForm.get('city');
  }

  get state(): any {
    return this.officeForm.get('state');
  }

  get zip(): any {
    return this.officeForm.get('zip');
  }

  // get employees(): any {
  //   return this.officeForm.get('employees');
  // }
}
