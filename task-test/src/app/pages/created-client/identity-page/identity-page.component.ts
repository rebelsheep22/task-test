import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { slider } from 'src/app/route-animation';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-identity-page',
  templateUrl: './identity-page.component.html',
  styleUrls: ['./identity-page.component.scss'],
})
export class IdentityPageComponent implements OnInit {
identityForm!: FormGroup;
documentTypes!: any[];
durationInSeconds = 5;
fileName = '';
  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private formService: FormService  ) { }

  ngOnInit(): void {
    this.identityForm = this.formService.identityPageForm;
    this.documentTypes = [
      { name: 'Passport' },
      { name: 'Birth Certificate' },
      { name: 'Driving License'}
    ];
  }
  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
    const file:File = fileInputEvent.target.files[0];
    if (file) {

      this.fileName = file.name;

      const formData = new FormData();
      this.formService.uploadFile(file);
      formData.append("thumbnail", file);
      
  }
  }
  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  goNextPage(){
    this.formService.saveIdentityForm(this.identityForm);
    setTimeout(() => {
      this.router.navigate(['/created-client']);
    }, this.durationInSeconds * 100);
    this.openSnackBar();
  }
  goBack(){
    this.router.navigate(['/client-form/client']);
  }
}
@Component({
  selector: 'app-snackbar',
  templateUrl: 'snackbar.component.html',
  styles: [
    `
    .snackbar {
      color: hotpink;
    }
  `,
  ],
})
export class SnackbarComponent {}