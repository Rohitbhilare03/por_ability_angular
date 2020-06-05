import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { SearchModel } from '../models/search.model';
import { AppConfig } from '../_config/app.config';

@Component({
  selector: 'app-company-valuation',
  templateUrl: './company-valuation.component.html',
  styleUrls: ['./company-valuation.component.scss']
})

export class CompanyValuationComponent implements OnInit {
  // List of Exchange Availble
  // We can get from API if List of Exchange Available
  exchanges: Array<string> = ['NYSE', 'NASDAQ', 'AMEX', 'EURONEX', 'TSX', 'INDEXES', 'ETFs', 'MUTUAL FUNDS', 'FOREX', 'CRYPTO'];

  searchModel: SearchModel = new SearchModel();
  companyList: any;
  DownloadData: any;
  apiKey: string;
  limits: number[];

  constructor(private globalService: GlobalService) {
    this.apiKey = new AppConfig().apiKey;
    this.limits = Array(10).fill(0).map((x, i) => i + 1);


  }

  // companyFilter
  searchCompany() {
    this.globalService.searchCompany(this.searchModel).subscribe(
      data => {
        this.companyList = data;
      }
    );
  }

  downLoadFile(data: any, filename = 'data') {
    const replacer = (key, value) => value === null ? '' : value; // Null values are replaced by blank
    const header = Object.keys(data[0]); // declaring header
    const csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(',')); // inserting comma at the begining
    const csvArray = csv.join('\r\n');
    const blob = new Blob([csvArray], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const dwldLink = document.createElement('a');
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', filename + '.csv');
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  downloadStatement(symbol: string) {
    this.globalService.downloadStatement(symbol).subscribe(data => {
      this.downLoadFile(data.financials);
    });
  }

  ngOnInit() {
  }

}
