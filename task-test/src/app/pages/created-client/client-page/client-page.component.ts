import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss'],
})
export class ClientPageComponent implements OnInit {
  coordinators!: any[];
  clientTypes!: any[];
  clientForm!: FormGroup;
  canGoNextStep = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private formService : FormService, private cd: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.clientForm = this.formService.clientPageForm;
    console.log(this.clientForm)
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
    sessionStorage.setItem('canGoNextStep', 'false');
  }
  goNextPage(){
    this.formService.saveClientForm(this.clientForm);
    sessionStorage.setItem('canGoNextStep', 'true');
  }
}
