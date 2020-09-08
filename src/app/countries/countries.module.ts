import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryCardComponent } from './country-card/country-card.component';



@NgModule({
  declarations: [CountryListComponent, CountryCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CountryListComponent,CountryCardComponent
  ]
})
export class CountriesModule { }
