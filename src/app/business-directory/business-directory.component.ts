import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';  
import { BusinessService } from '../services/business.service';

@Component({
  selector: 'app-business-directory',
  templateUrl: './business-directory.component.html',
  styleUrls: ['./business-directory.component.css']
})
export class BusinessDirectoryComponent implements OnInit {
  listOfBusinesses: any[] = [];
  constructor(private spinner: NgxSpinnerService,
              private busService: BusinessService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getBusinesses();
  }


  getBusinesses() {
    return this.busService.getBusinesses()
    .then(res => {
      this.spinner.hide();
      res.data.forEach(elem => {
        this.listOfBusinesses.push(elem);
        console.log(this.listOfBusinesses);
      });
    })
  }
}
