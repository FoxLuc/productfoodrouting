import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  obs: Observable<Object>;
  results: any;

  constructor() { }

  ngOnInit(): void {
  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    //this.obs = this.api.searchProduct(this.query);
    this.obs.subscribe((data) => { this.results = data; console.log(this.results) });
  }

   renderResults(res: any): void {
    this.results = null;
    if (res && res.products && res.products) {
      this.results = res.products;
    }
  }

}
