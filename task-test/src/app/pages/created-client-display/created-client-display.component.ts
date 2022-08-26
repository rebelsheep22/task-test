import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-created-client-display',
  templateUrl: './created-client-display.component.html',
  styleUrls: ['./created-client-display.component.scss']
})
export class CreatedClientDisplayComponent implements OnInit {

  clientPageDisplayForm! : FormGroup;
  addressPageDisplayForm! : FormGroup;
  identityPageDisplayForm!: FormGroup;
  uploadedFile!: File;
  fileUrl!: any;
   constructor(private formService: FormService,private router: Router) { }
 
   ngOnInit(): void { 
     this.clientPageDisplayForm = this.formService.clientPageForm;
     this.addressPageDisplayForm = this.formService.addressPageForm;
     this.identityPageDisplayForm = this.formService.identityPageForm;
   }

   goBack(){
    this.router.navigate(['/client-form']);
  }
}
