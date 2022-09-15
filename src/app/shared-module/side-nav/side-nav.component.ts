import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  officeToggle!: boolean;
  employeeToggle!: boolean;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  onOfficeOptionClick(): void {

    this.officeToggle = !this.officeToggle;
    console.log("office toggle", this.officeToggle);
  }

  onEmployeeOptionClick(): void {
    this.employeeToggle = !this.employeeToggle;
  }
}
