import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  clientPageForm! : FormGroup;
  addressPageForm! : FormGroup;
  identityPageForm! : FormGroup;
  displayForm! : FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.clientPageForm = this.formBuilder.group({
      lastName: [null, Validators.required],   
      firstName: [null, Validators.required],
      middleName: [null],
      phoneNumber: [
        null,
        [Validators.pattern('^[0-9]{11}$'), Validators.required],
      ],
      gender: [null],
      clientType: [[], Validators.required],
      coordinatorName: [null],
      date: [null,Validators.required],
      sendSms: [null],
    });
    this.addressPageForm = this.formBuilder.group({
      country: [null, Validators.required],
      city: [null, Validators.required],
      index: [null],
      area: [null],
      street: [null],
      house: [null]
    });
    this.identityPageForm = this.formBuilder.group({
      documentType: [null,Validators.required],
      series: [null],
      number: [
        null,
        [Validators.pattern('^[0-9]{12}$'), Validators.required],
      ],
      issuer: [null],
      dateOfIssue: [null, Validators.required]
    });
    
  }
  
  saveClientForm(m: FormGroup){
    this.clientPageForm = m;
    console.log(this.clientPageForm)
    return this.clientPageForm;
  }
  saveAddressForm(m: FormGroup){
    this.addressPageForm = m;
    return this.addressPageForm;
  }
  saveIdentityForm(m:FormGroup){
    this.identityPageForm = m;
    console.log(m)
    return this.identityPageForm;
  }
  // joinForms(){
  //   this.displayForm = new FormGroup({form1:this.clientPageForm,form2:this.addressPageForm, form3: this.identityPageForm});
  //   return this.displayForm;
  // }

}
