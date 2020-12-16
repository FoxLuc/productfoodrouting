import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  searchItem(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=5&json=true`;
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

  getItem(id: string) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${id}`;
    console.log(this.http.get(url));
    return this.http.get(url);
  }
}
