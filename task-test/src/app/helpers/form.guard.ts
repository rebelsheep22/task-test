import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormService } from '../services/form.service';


@Injectable({ providedIn: 'root' })
export class FormGuard implements CanActivate {
    constructor(
        private router: Router,
        private formService: FormService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        const canGoNextStep = JSON.parse(sessionStorage.getItem('canGoNextStep')!);
        
        if (this.formService.clientPageForm.valid) {
            return true;
        }
        this.router.navigate(["client-form/client"], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
