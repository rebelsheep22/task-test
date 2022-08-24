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
  clientForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}
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

  goNextPage(){
    this.router.navigate(['/client-form/address'])
  }
}
