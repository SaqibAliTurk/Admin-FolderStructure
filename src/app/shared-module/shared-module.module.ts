import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// components
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrintErrorComponent } from './print-error/print-error.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    PrintErrorComponent,
    SideNavComponent,
    CustomSelectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    PrintErrorComponent,
    SideNavComponent,
    PrintErrorComponent,
    CustomSelectComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    PrintErrorComponent,
  ],
})
export class SharedModuleModule {}
