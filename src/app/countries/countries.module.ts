import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CountryListComponent, CountryCardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CountryListComponent,CountryCardComponent
  ]
})
export class CountriesModule { }
