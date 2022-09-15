import { Component, Input, OnInit } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  @Input() serial = 1;
  @Input() id!: any;
  @Input() isFirstEmp = true;

  config!: any;

  faTrash = faTrash;

  dropdownOptions = [
    { description: 'Item1' },
    { description: 'Item2' },
    { description: 'Item3' },
  ];
  constructor() {}

  ngOnInit(): void {
    this.config = {
      displayKey: 'description', //if objects array passed which key to be displayed defaults to description
      search: true, //true/false for the search functionlity defaults to false,
    };
  }
}
