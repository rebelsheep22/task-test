import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identity-page',
  templateUrl: './identity-page.component.html',
  styleUrls: ['./identity-page.component.scss']
})
export class IdentityPageComponent implements OnInit {
identityForm!: FormGroup;
documentTypes!: any[];

  constructor(
    private formBuilder: FormBuilder, private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.documentTypes = [
      { name: 'Passport' },
      { name: 'Birth Certificate' },
      { name: 'Driving License'}
    ];
  }
  buildForm(){
    this.identityForm = this.formBuilder.group({
      documentType: [null,Validators.required],
      series: [null],
      number: [
        null,
        [Validators.pattern('^[0-9]'), Validators.required],
      ],
      issuer: [null],
      dateOfIssue: [null, Validators.required]
    })
  }
  
  goNextPage(){
    this.router.navigate(['/client-form/address'])
  }
}
