import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.scss']
})
export class AddressPageComponent implements OnInit {
  countries$! : Observable <any>
  addressForm!: FormGroup;
  chosenCities$!: Observable<any>;
  constructor(
    private countriesService: CountriesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();

   this.getCountry();
   this.trackCountryChange()
  }
  getCountry(){
    this.countries$ = this.countriesService.getCountries();
  }
  getCity(n : string){
    this.chosenCities$ = this.countriesService.getCities(n);
  }
  buildForm() {
    this.addressForm = this.formBuilder.group({
      country: [null, Validators.required],
      city: [null, Validators.required],
      index: [null],
      area: [null],
      street: [null],
      house: [null]
    });
  }
  trackCountryChange(){
    this.addressForm.get('country')?.valueChanges.subscribe(m=>{
      this.getCity(m);
      
    })
  }
  goNextPage(){
    this.router.navigate(['/client-form/identity'])
  }

}
