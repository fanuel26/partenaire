import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { ProfessionnalComponent } from './components/professionnal/professionnal.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    WebsiteComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    ProfessionnalComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    LayoutsModule
  ]
})
export class WebsiteModule { }
