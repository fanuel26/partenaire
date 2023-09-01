import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderSComponent } from './components/header-s/header-s.component';
import { FooterSComponent } from './components/footer-s/footer-s.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderSComponent,
    FooterSComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderSComponent,
    FooterSComponent
  ]
})
export class LayoutsModule { }
