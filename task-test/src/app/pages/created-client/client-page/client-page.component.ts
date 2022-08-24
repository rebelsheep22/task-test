import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss'],
})
export class ClientPageComponent implements OnInit {
  coordinators!: any[];
  clientTypes!: any[];
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  clientForm!: FormGroup;
  ngOnInit(): void {
    this.coordinators = [
      { name: 'Jhones' },
      { name: 'Collinwood' },
      { name: 'Smith' },
      { name: 'Henderson' },
      { name: 'Wheeler' },
      { name: 'Byers' },
      { name: 'Sinclair' },
    ];
    this.clientTypes = ['VIP Clients', 'Loyal Clients', 'New Clients'];
    this.buildForm();
  }
  buildForm() {
    this.clientForm = this.formBuilder.group({
      lastName: [null, Validators.required],
      firstName: [null, Validators.required],
      middleName: [null],
      phoneNumber: [
        null,
        [Validators.pattern('^[0-9]{11}$'), Validators.required],
      ],
      gender: [null],
      clientType: [[], Validators.required],
      coordinatorName: [],
      date: [Validators.required],
      sendSms: [],
    });
  }
  log() {
    console.log(this.clientForm.get('coordinatorName')?.value);
    console.log(this.clientForm.get('lastName')?.value);
    console.log(this.clientForm.get('firstName')?.value);
    console.log(this.clientForm.get('phoneNumber')?.value);
    console.log(this.clientForm.get('gender')?.value);
    console.log(this.clientForm.get('clientType')?.value);
    console.log(this.clientForm.get('sendSms')?.value);
    console.log(this.clientForm.get('middleName')?.value);
    console.log(this.clientForm.get('date')?.value);
  }
  goNextPage(){
    this.router.navigate(['/client-form/address'])
  }
}
