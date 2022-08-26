import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { slider } from 'src/app/route-animation';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-created-client',
  templateUrl: './created-client.component.html',
  styleUrls: ['./created-client.component.scss'],
  animations: [ slider ]
})
export class CreatedClientComponent implements OnInit {
 clientPageDisplayForm! : FormGroup;
 addressPageDisplayForm! : FormGroup;
 identityPageDisplayForm!: FormGroup;

  constructor(private formService: FormService, private router: Router) { }

  ngOnInit(): void {    
    this.formService.clientPageForm.reset();
    this.formService.addressPageForm.reset();
    this.formService.identityPageForm.reset();
  }
  redirectToRegistration(){
    this.router.navigate(['/client-form/client']);
  }
}
