import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  open: boolean = false;
  image: any;
  constructor() { }

  ngOnInit(): void {
  }
  
  toggleMenu(): void {
    console.log(this.open);
    this.open = !this.open;
  }

}
