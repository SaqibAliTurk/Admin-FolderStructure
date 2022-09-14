import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrintErrorComponent } from './print-error/print-error.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    PrintErrorComponent
  ],
  imports: [
    CommonModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[FooterComponent,
    HeaderComponent,
    NavbarComponent,
    PrintErrorComponent]
})
  

export class SharedModuleModule { }
