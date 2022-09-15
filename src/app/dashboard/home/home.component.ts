import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any;
  open: boolean = false;
  image: any;

  constructor() {}

  ngOnInit(): void {}
  toggleMenu(): void {
    this.open = !this.open;
  }
}
