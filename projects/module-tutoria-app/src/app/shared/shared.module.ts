import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    BannerComponent,
    TableComponent
  ]
})
export class SharedModule { }
