import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpService: HttpClient) {}
  getCountries() {
    let apiUrl = "https://restcountries.com/v2/all";
    return this.httpService.get(apiUrl).pipe(map((res) => res ));
  }
  getCities(country: string) {
    let apiUrl = "https://countriesnow.space/api/v0.1/countries/cities";
    return this.httpService
      .post(apiUrl, {
        country: country.toLowerCase(),
      })
      .pipe(
        map((res: any) => 
          res = res.data)
      );
  }
}
