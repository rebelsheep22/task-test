import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';
import { FormService } from 'src/app/services/form.service';

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
    private router: Router,
    private formService: FormService
  ) { }

  ngOnInit(): void {
   this.addressForm = this.formService.addressPageForm;
   this.getCountry();
   this.trackCountryChange()
  }
  getCountry(){
    this.countries$ = this.countriesService.getCountries();
  }
  getCity(n : string){
    this.chosenCities$ = this.countriesService.getCities(n);
  }
  trackCountryChange(){
    this.addressForm.get('country')?.valueChanges.subscribe(m=>{
      this.getCity(m);
      
    })
  }
  goNextPage(){
    this.formService.saveAddressForm(this.addressForm)
    this.router.navigate(['/client-form/identity']);
  }
  goBack(){
    this.router.navigate(['/client-form/client']);
  }

}
