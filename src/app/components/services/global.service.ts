import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../_config/app.config';
import { SearchModel } from '../models/search.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GlobalService {
  apiKey: string;
  constructor(
    private httpClient: HttpClient,
  ) {
    this.apiKey = new AppConfig().apiKey;
  }
  // Search Company
  searchCompany(searchModel: SearchModel): Observable<any> {
    return this.httpClient.get('https://financialmodelingprep.com/api/v3/search?query=' + searchModel.query + '&limit=' + searchModel.limit + '&exchange=' + searchModel.exchange + '&apikey=' + this.apiKey);
  }

  // Download Statement
  downloadStatement(symbol: string): Observable<any> {
    return this.httpClient.get('https://financialmodelingprep.com/api/v3/financials/income-statement/' + symbol + '?datatype=csv&apikey=' + this.apiKey);
  }
}
