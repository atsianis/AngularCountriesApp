import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { CountryCardComponent } from '../country-card/country-card.component';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Country[];
  search: string = "";
  searched: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries =>{
        this.countries = countries ;
        this.searched = countries ;
    })
  }

  onInput():void{
    this.searched = this.countries.filter(country => country.name.toLowerCase().startsWith(this.search.toLowerCase()));
  }

}
