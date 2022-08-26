import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  constructor(private formService: FormService) { }

  ngOnInit(): void {    
    this.clientPageDisplayForm = this.formService.clientPageForm;
    this.addressPageDisplayForm = this.formService.addressPageForm;
    this.identityPageDisplayForm = this.formService.identityPageForm;
  }

}
