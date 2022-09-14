import { Component, OnInit } from '@angular/core';
import {
  faCaretDown,
  faSearch,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCaretDown = faCaretDown;
  faSearch = faSearch;
  faBars = faBars;
  showSearchInput = true;
  showMenu = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  onSearchClick() {
    this.showSearchInput = !this.showSearchInput;
    console.log(this.showSearchInput);
  }

  onMenuClick() {
    this.showMenu = !this.showMenu;
  }

}
